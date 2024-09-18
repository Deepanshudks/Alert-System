import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationBasedAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const fetchUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ latitude, longitude });

            try {
              // Fetch alerts based on the user's location
              const response = await axios.get(`/api/alerts/nearby`, {
                params: { latitude, longitude }
              });

              if (response.data && Array.isArray(response.data.alerts)) {
                setAlerts(response.data.alerts);
              } else {
                setErrorMessage('No alerts available for your location.');
              }
            } catch (error) {
              setErrorMessage('Failed to fetch alerts. Please try again later.');
              console.error('Error fetching alerts:', error);
            }
          },
          (error) => {
            setErrorMessage('Failed to get location. Please enable location services.');
            console.error('Geolocation error:', error);
          }
        );
      } else {
        setErrorMessage('Geolocation is not supported by this browser.');
      }
    };

    fetchUserLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Alerts Near You</h2>

      {errorMessage && (
        <p className="text-center text-red-500 mb-4">{errorMessage}</p>
      )}

      {alerts.length > 0 ? (
        <div className="max-w-4xl mx-auto">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-6 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                alert.level === 'Critical' ? 'bg-red-100 border-l-4 border-red-500' :
                alert.level === 'High' ? 'bg-orange-100 border-l-4 border-orange-500' :
                'bg-yellow-100 border-l-4 border-yellow-500'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{alert.title}</h3>
              <p className="text-gray-700 mb-2">{alert.description}</p>
              <p className="text-gray-500">
                <strong>Date:</strong> {new Date(alert.date).toLocaleDateString()}
              </p>
              <p className="text-gray-500">
                <strong>Alert Level:</strong> {alert.level}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No alerts available at this time.</p>
      )}
    </div>
  );
};

export default LocationBasedAlerts;
