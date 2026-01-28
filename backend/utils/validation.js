/**
 * Validates patient data against clinical value ranges
 * Returns an array of error messages (empty array if valid)
 */
function validatePatientData(data) {
  const errors = [];

  // Required fields
  if (!data.age) {
    errors.push("Age is required");
  } else if (data.age < 0 || data.age > 120) {
    errors.push("Age must be between 0 and 120 years");
  }

  if (!data.sex) {
    errors.push("Sex is required");
  } else if (!['male', 'female'].includes(data.sex.toLowerCase())) {
    errors.push("Sex must be 'male' or 'female'");
  }

  if (!data.social_life) {
    errors.push("Social life is required");
  } else if (!['city', 'village'].includes(data.social_life.toLowerCase())) {
    errors.push("Social life must be 'city' or 'village'");
  }

  if (!data.clinician_id) {
    errors.push("Clinician ID is required");
  }

  // Optional fields with range validation
  if (data.cholesterol !== undefined && data.cholesterol !== null) {
    if (data.cholesterol < 0 || data.cholesterol > 500) {
      errors.push("Cholesterol must be between 0 and 500 mg/dL");
    }
  }

  if (data.triglycerides !== undefined && data.triglycerides !== null) {
    if (data.triglycerides < 0 || data.triglycerides > 1000) {
      errors.push("Triglycerides must be between 0 and 1000 mg/dL");
    }
  }

  if (data.hdl !== undefined && data.hdl !== null) {
    if (data.hdl < 0 || data.hdl > 100) {
      errors.push("HDL must be between 0 and 100 mg/dL");
    }
  }

  if (data.ldl !== undefined && data.ldl !== null) {
    if (data.ldl < 0 || data.ldl > 300) {
      errors.push("LDL must be between 0 and 300 mg/dL");
    }
  }

  if (data.vldl !== undefined && data.vldl !== null) {
    if (data.vldl < 0 || data.vldl > 100) {
      errors.push("VLDL must be between 0 and 100 mg/dL");
    }
  }

  if (data.bp_systolic !== undefined && data.bp_systolic !== null) {
    if (data.bp_systolic < 50 || data.bp_systolic > 250) {
      errors.push("Systolic BP must be between 50 and 250 mmHg");
    }
  }

  if (data.bp_diastolic !== undefined && data.bp_diastolic !== null) {
    if (data.bp_diastolic < 30 || data.bp_diastolic > 150) {
      errors.push("Diastolic BP must be between 30 and 150 mmHg");
    }
  }

  if (data.hba1c !== undefined && data.hba1c !== null) {
    if (data.hba1c < 0 || data.hba1c > 20) {
      errors.push("HbA1c must be between 0 and 20%");
    }
  }

  if (data.bmi !== undefined && data.bmi !== null) {
    if (data.bmi < 10 || data.bmi > 60) {
      errors.push("BMI must be between 10 and 60");
    }
  }

  if (data.rbs !== undefined && data.rbs !== null) {
    if (data.rbs < 0 || data.rbs > 600) {
      errors.push("Random Blood Sugar must be between 0 and 600 mg/dL");
    }
  }

  return errors;
}

module.exports = { validatePatientData };