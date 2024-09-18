const express = require('express');
const { getAllComplaints } = require('./db'); // Import the in-memory database
const router = express.Router();

// GET route to fetch all complaints
router.get('/complaints', (req, res) => {
  const complaints = getAllComplaints();

  if (complaints.length === 0) {
    return res.status(404).json({ message: 'No complaints found' });
  }

  // Return all complaints
  res.status(200).json({ complaints });
});

module.exports = router;
