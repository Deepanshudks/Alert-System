const express = require('express');
const bcrypt = require('bcrypt');
const { addUser, findUserByEmail } = require('./db'); // Import the in-memory database functions
const { v4: uuidv4 } = require('uuid'); // To generate unique complaint IDs
const { addComplaint } = require('../db/db'); // Import the in-memory database

const router = express.Router();

router.post('/signup', async (req, res) => {
  const {
    fullName,
    email,
    password,
    phoneNumber,
    address,
    idVerification,
    emergencyContact,
    agreement
  } = req.body;

  try {
    if (!agreement) {
      return res.status(400).json({ error: 'You must agree to the terms and conditions' });
    }

    // Check if the user already exists
    if (findUserByEmail(email)) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = {
      fullName,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
      idVerification,
      emergencyContact,
    };

    // Add the user to the in-memory database
    addUser(newUser);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // If successful, send response (you can also set up a session or token here)
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in' });
  }
});

router.post('/complaints/register', (req, res) => {
  const { subject, description, category, contact } = req.body;

  // Generate a unique complaint ID
  const complaintId = uuidv4();

  // Create the complaint object
  const complaint = {
    complaintId,
    subject,
    description,
    category,
    contact,
    status: 'Pending', // Default status
    createdAt: new Date().toISOString(),
    location,
  };

  // Add the complaint to the in-memory database
  addComplaint(complaint);

  // Return success response
  res.status(201).json({ message: 'Complaint registered successfully', complaint });
});

module.exports = router;
