"""
Random Forest Model Training Script
Trains the diabetic patient risk assessment model using point-based risk calculation
Run: python3 train_model.py
"""

import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score
import pickle
import os


def load_and_preprocess_data(csv_path):
    """
    Loads and prepares the diabetes dataset for training.
    """
    print("Loading diabetes dataset")
    df = pd.read_csv(csv_path)
    print(f"Loaded {len(df)} patient records")

    print("Processing Blood Pressure column")
    bp_split = df["BP"].astype(str).str.split("/", expand=True)
    df["BP_Systolic"] = pd.to_numeric(bp_split[0], errors="coerce")
    df["BP_Diastolic"] = pd.to_numeric(bp_split[1], errors="coerce")

    bp_sys_missing = df["BP_Systolic"].isna().sum()
    bp_dia_missing = df["BP_Diastolic"].isna().sum()
    if bp_sys_missing > 0 or bp_dia_missing > 0:
        print(
            f"   Found {bp_sys_missing} missing Systolic BP and {bp_dia_missing} missing Diastolic BP values"
        )
        df["BP_Systolic"] = df["BP_Systolic"].fillna(df["BP_Systolic"].median())
        df["BP_Diastolic"] = df["BP_Diastolic"].fillna(df["BP_Diastolic"].median())

    print("Processing Age column")
    df["Age"] = (
        df["Age"]
        .astype(str)
        .str.upper()
        .str.replace("YEARS", "")
        .str.replace("YEAR", "")
        .str.strip()
    )
    df["Age"] = pd.to_numeric(df["Age"], errors="coerce")

    age_missing = df["Age"].isna().sum()
    if age_missing > 0:
        print(f"   Found {age_missing} missing Age values, filling with median")
        df["Age"] = df["Age"].fillna(df["Age"].median())

    df["Age"] = df["Age"].astype(int)

    print("Encoding categorical variables")
    df["Sex_Encoded"] = df["Sex"].apply(lambda x: 1 if x == "MALE" else 0)

    print("Handling missing values in numeric columns")

    df["RBS"] = pd.to_numeric(df["RBS"], errors="coerce")
    df["FBS"] = pd.to_numeric(df["FBS"], errors="coerce")
    df["RBS"] = df["RBS"].fillna(df["FBS"])

    numeric_columns = ["HbA1c", "BMI", "BP_Systolic", "BP_Diastolic", "RBS"]

    for col in numeric_columns:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")
            missing_count = df[col].isna().sum()
            if missing_count > 0:
                print(f"   {col}: {missing_count} missing values, filling with median")
            df[col] = df[col].fillna(df[col].median())

    print("Creating risk categories using point-based system")

    def calculate_risk_level(row):
        """
        Point-based medical risk assessment for 5 health indicators.

        Points: HbA1c (0-40) + RBS (0-20) + BMI (0-15) + BP (0-15) + Age (0-10)
        Categories: Low (0-33), Medium (34-66), High (67-100)
        """
        points = 0

        if row["HbA1c"] >= 6.5:
            points += 40
        elif row["HbA1c"] >= 5.7:
            points += 20

        if row["RBS"] >= 200:
            points += 20
        elif row["RBS"] >= 140:
            points += 10

        if row["BMI"] >= 30:
            points += 15
        elif row["BMI"] >= 25:
            points += 8

        if row["BP_Systolic"] >= 140 or row["BP_Diastolic"] >= 90:
            points += 15
        elif row["BP_Systolic"] >= 130 or row["BP_Diastolic"] >= 85:
            points += 8

        if row["Age"] >= 65:
            points += 10
        elif row["Age"] >= 45:
            points += 5

        if points < 34:
            return 0
        elif points < 67:
            return 1
        else:
            return 2

    df["Risk_Category"] = df.apply(calculate_risk_level, axis=1)

    print("Creating feature matrix")

    feature_columns = [
        "HbA1c",
        "Age",
        "Sex_Encoded",
        "BP_Systolic",
        "BP_Diastolic",
        "BMI",
        "RBS",
    ]

    X = df[feature_columns]
    y = df["Risk_Category"]

    print(f"Features prepared: {len(feature_columns)} features")
    print("Risk distribution:")
    print(f"   Low risk: {(y == 0).sum()} patients")
    print(f"   Medium risk: {(y == 1).sum()} patients")
    print(f"   High risk: {(y == 2).sum()} patients")

    return X, y, df


def train_random_forest(X, y):
    """
    Trains the Random Forest model with 100 decision trees.
    """
    print("Splitting data into training and testing sets")

    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42, stratify=y
    )

    print(f"Training set: {len(X_train)} patients")
    print(f"Testing set: {len(X_test)} patients")

    print("Training Random Forest model")

    model = RandomForestClassifier(
        n_estimators=100,
        max_depth=None,
        min_samples_split=2,
        min_samples_leaf=1,
        random_state=42,
        n_jobs=-1,
    )

    model.fit(X_train, y_train)
    print("Training complete")

    return model, X_train, X_test, y_train, y_test


def evaluate_model(model, X_train, X_test, y_train, y_test):

    print("Evaluating model")

    y_train_pred = model.predict(X_train)
    train_accuracy = accuracy_score(y_train, y_train_pred)

    print("Training Set Performance")
    print(f"   Accuracy: {train_accuracy*100:.2f}%")

    y_test_pred = model.predict(X_test)
    test_accuracy = accuracy_score(y_test, y_test_pred)

    print("Testing Set Performance")
    print(f"   Accuracy: {test_accuracy*100:.2f}%")

    print("Running cross-validation")
    cv_scores = cross_val_score(model, X_train, y_train, cv=5, scoring="accuracy")

    print("Cross-Validation Performance")
    print(f"   Mean Accuracy: {cv_scores.mean()*100:.2f}%")
    print(f"   Standard Deviation: {cv_scores.std()*100:.2f}%")

    print("Overfitting Check")
    overfit_gap = train_accuracy - test_accuracy
    print(f"   Training Accuracy: {train_accuracy*100:.2f}%")
    print(f"   Testing Accuracy: {test_accuracy*100:.2f}%")
    print(f"   Difference: {overfit_gap*100:.2f}%")

    if overfit_gap < 0.05:
        print("   Status: Model generalizes well")
    elif overfit_gap < 0.10:
        print("   Status: Acceptable overfitting")
    else:
        print("   Status: Significant overfitting detected")


def save_model(model, output_path="models/random_forest_model.pkl"):
    """
    Saves the trained model for use by app.py.
    """
    print("Saving model")

    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    with open(output_path, "wb") as f:
        pickle.dump(model, f)

    file_size = os.path.getsize(output_path) / 1024
    print(f"Model saved to: {output_path}")
    print(f"File size: {file_size:.2f} KB")


def main():
    """
    Main training pipeline using point-based risk assessment.
    """
    print("Diabetic Risk Classification System - Model Training")

    CSV_PATH = "Dabetics-dataset.csv"

    if not os.path.exists(CSV_PATH):
        print(f"Error: Dataset not found at {CSV_PATH}")
        print("Please place the Dabetics-dataset.csv file in this directory")
        return

    print("Step 1: Loading and preprocessing data")
    X, y, df = load_and_preprocess_data(CSV_PATH)

    print("Step 2: Training Random Forest model")
    model, X_train, X_test, y_train, y_test = train_random_forest(X, y)

    print("Step 3: Evaluating model performance")
    evaluate_model(model, X_train, X_test, y_train, y_test)

    print("Step 4: Saving model")
    save_model(model)

    print("Training complete")
    print("Start the FastAPI service with: uvicorn app:app --reload --port 5000")


if __name__ == "__main__":
    main()
