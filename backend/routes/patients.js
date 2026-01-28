const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// CREATE - Add a new patient
router.post('/', patientController.createPatient);

// READ - Get all patients (with optional filters)
router.get('/', patientController.getAllPatients);

// READ - Get a single patient by ID
router.get('/:id', patientController.getPatientById);

// UPDATE - Update a patient's information
router.put('/:id', patientController.updatePatient);

// DELETE - Remove a patient
router.delete('/:id', patientController.deletePatient);

module.exports = router;