/*
 * auth.js
 * -----------
 * This file is defines the authentication API endpoints (login and signup)
 * These routes connect URLs to controller functions
 */

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Authentication routes

// POST /api/auth/signup - Create new clinician account
router.post('/signup', authController.signup);

// POST /api/auth/login - Login existing clinician
router.post('/login', authController.login);

module.exports = router;