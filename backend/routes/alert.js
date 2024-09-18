const express = require('express');
const geolib = require('geolib');
const router = express.Router();

// Example in-memory alerts with location data
const alerts = [
  {
    id: 1,
    title: 'Suspicious Person Spotted',
    description: 'A suspicious individual has been spotted near the community park.',
    date: '2024-09-18T10:00:00Z',
    level: 'High',
    category: 'Suspicious Activity',
    location: { latitude: 40.7128, longitude: -74.0060 } // Example location (New York)
  },
  {
    id: 2,
    title: 'Robbery Incident Reported',
    description: 'A robbery occurred at the local convenience store. Police are investigating.',
    date: '2024-09-17T08:00:00Z',
    level: 'Critical',
    category: 'Unsafe Activity',
    location: { latitude: 40.730610, longitude: -73.935242 } // Example location (New York)
  },
  {
    id: 3,
    title: 'Road Work on Main Street',
    description: 'Road construction will take place on Main Street.',
    date: '2024-09-17T10:00:00Z',
    level: 'Medium',
    category: 'Road Work',
    location: { latitude: 40.730610, longitude: -73.935242 } // Example location (New York)
  }
  // Add more alerts here
];

const getNewAlertsCount = () => {
    // Replace with actual logic to query the database for unread/new alerts
    return alerts.filter(alert => {
      // Logic to determine if the alert is "new" (e.g., based on a timestamp or status)
      return true; // Example: return all alerts as "new"
    }).length;
  };
  
  // GET route to fetch the count of new alerts
  router.get('/alerts/count', (req, res) => {
    try {
      const count = getNewAlertsCount();
      res.status(200).json({ count });
    } catch (error) {
      console.error('Error fetching new alerts count:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

// GET route to fetch alerts based on user location
router.get('/alerts', (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ message: 'Location parameters are required.' });
  }

  const userLocation = {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude)
  };

  const maxDistance = 5000; // Example: 5 km radius
  const nearbyAlerts = alerts.filter(alert => {
    const distance = geolib.getDistance(userLocation, alert.location);
    return distance <= maxDistance; // maxDistance in meters
  });

  res.status(200).json({ alerts: nearbyAlerts });
});

module.exports = router;
