/*

controllers/authController.js
Handle login and signup logic for clinicians

*/
const bcrypt = require('bcrypt');
const db = require('../config/database');

// SignUp
async function signup(req, res) {
    console.log('Signup Function')
  try {
    const { name, email, password } = req.body;

    // Check if all required fields are present
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
        errors: ['Please provide full name, email, and password']
      });
    }

    // Validate email format 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
        errors: ['Please provide a valid email address']
      });
    }

    // Validate password strength
    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password too short',
        errors: ['Password must be at least 6 characters long']
      });
    }

    // Check if email already exists
    const existingUser = await db.queryOne(
      'SELECT email FROM clinicians WHERE email = ?',
      [email]
    );

    console.log('Checking for existing email:', email);
    console.log('Query result:', existingUser);

    if (existingUser.success && existingUser.data) {
      console.log('Email already exists! Rejecting signup.');
      return res.status(400).json({
        success: false,
        message: 'Email already registered',
        errors: ['This email is already in use. Please use a different email or login.']
      });
    }

    console.log('Email is available. Proceeding with signup.');

    // Hash the password (bcrypt automatically adds salt)
    // Salt rounds = 10 (good balance between security and speed)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new clinician into database
    const result = await db.execute(
      'INSERT INTO clinicians (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );

    if (!result.success) {
      return res.status(500).json({
        success: false,
        message: 'Failed to create account',
        errors: ['Database error. Please try again.']
      });
    }

    // Newly created clinician's ID
    const newClinicianId = result.data.insertId;

    // Return success with clinician info
    res.status(201).json({
      success: true,
      message: 'Account created successfully!',
      clinician: {
        clinician_id: newClinicianId,
        name: name,
        email: email
      }
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during signup',
      errors: [error.message]
    });
  }
}

async function login(req, res) {
      console.log('Login function'); 

  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required',
        errors: ['Please provide both email and password']
      });
    }

    // Find clinician by email
    const result = await db.queryOne(
      'SELECT * FROM clinicians WHERE email = ?',
      [email]
    );

    // Check if clinician exists
    if (!result.success || !result.data) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
        errors: ['Email or password is incorrect']
      });
    }

    const clinician = result.data;

    // Compare password with hashed password in database
    const isPasswordValid = await bcrypt.compare(password, clinician.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
        errors: ['Email or password is incorrect']
      });
    }

    // Login successful! Return clinician info
    res.json({
      success: true,
      message: 'Login successful!',
      clinician: {
        clinician_id: clinician.clinician_id,
        name: clinician.name,
        email: clinician.email
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during login',
      errors: [error.message]
    });
  }
}

module.exports = {
  signup,
  login
};