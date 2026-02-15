-- seed.sql
-- Sample data for Diabetic Risk Classification System
USE diabetic_db;
-- Clean slate: delete in correct order (children first, then parents)
DELETE FROM patients;
DELETE FROM clinicians;
-- Reset auto-increment IDs (optional but clean)
ALTER TABLE patients AUTO_INCREMENT = 1;
ALTER TABLE clinicians AUTO_INCREMENT = 1;
-- Insert clinicians with PROPER bcrypt hashes
INSERT INTO clinicians (full_name, email, password)
VALUES (
        'Sarah Johnson',
        'sarah.johnson@hospital.com',
        '$2b$10$hqJYYPuW1cpM5oLJRKnPL.w4UimhZMyi6yY9RMHKPO3nXrSpbQy3m'
    ),
    (
        'Michael Chen',
        'michael.chen@hospital.com',
        '$2b$10$iq2P6nP6obkpxUNlRD4LuOfsZvgj3vf3.vknkEh.kaCpveaV2qsD.'
    ),
    (
        'Emily Davis',
        'emily.davis@hospital.com',
        '$2b$10$omTg4eZAEN9ppwEh1oMTIOhcG/trJoIALNqyODJLi27XfplNpDuyu'
    );
-- Insert patients (same as before)
INSERT INTO patients (
        age,
        sex,
        social_life,
        cholesterol,
        triglycerides,
        hdl,
        ldl,
        vldl,
        bp_systolic,
        bp_diastolic,
        hba1c,
        bmi,
        rbs,
        genetic_family_history,
        risk_score,
        risk_category,
        clinician_id
    )
VALUES (
        45,
        'male',
        'city',
        220.00,
        180.00,
        40.00,
        140.00,
        36.00,
        140.00,
        90.00,
        7.50,
        28.50,
        145.00,
        'father',
        75.50,
        'high',
        1
    ),
    (
        32,
        'female',
        'village',
        180.00,
        120.00,
        55.00,
        100.00,
        24.00,
        120.00,
        80.00,
        5.80,
        24.20,
        105.00,
        'mother',
        45.20,
        'medium',
        1
    ),
    (
        58,
        'male',
        'city',
        240.00,
        200.00,
        35.00,
        160.00,
        40.00,
        150.00,
        95.00,
        8.20,
        31.00,
        165.00,
        'uncle_maternal',
        85.00,
        'high',
        2
    ),
    (
        28,
        'female',
        'village',
        170.00,
        100.00,
        60.00,
        90.00,
        20.00,
        115.00,
        75.00,
        5.20,
        22.50,
        95.00,
        NULL,
        25.80,
        'low',
        2
    ),
    (
        50,
        'male',
        'city',
        200.00,
        150.00,
        45.00,
        120.00,
        30.00,
        130.00,
        85.00,
        6.50,
        26.80,
        120.00,
        'uncle_paternal',
        58.30,
        'medium',
        3
    );
SELECT 'Clinicians seeded:' as '';
SELECT *
FROM clinicians;
SELECT 'Patients seeded:' as '';
SELECT *
FROM patients;