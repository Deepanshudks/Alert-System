import React, { useState, useEffect } from 'react';

const AlertsPage = () => {
  const [alerts, setAlerts] = useState([]);

  // Simulate fetching alerts from an API or backend
  useEffect(() => {
    const fetchedAlerts = [
      {
        id: 1,
        title: 'Suspicious Person Spotted',
        description: 'A suspicious individual has been spotted near the community park. Please stay vigilant.',
        date: '2024-09-18',
        level: 'High',
      },
      {
        id: 2,
        title: 'Road Work on Main Street',
        description: 'Road construction will take place on Main Street from 9 AM to 5 PM this week. Please use alternate routes.',
        date: '2024-09-17',
        level: 'Medium',
      },
      // Add more alerts here
    ];

    setAlerts(fetchedAlerts);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Neighborhood Alerts</h2>

      {alerts.length > 0 ? (
        <div className="max-w-4xl mx-auto">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-6 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow ${
                alert.level === 'High' ? 'bg-red-100 border-l-4 border-red-500' : 
                alert.level === 'Medium' ? 'bg-yellow-100 border-l-4 border-yellow-500' : 'bg-green-100 border-l-4 border-green-500'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{alert.title}</h3>
              <p className="text-gray-700 mb-2">{alert.description}</p>
              <p className="text-gray-500">
                <strong>Date:</strong> {alert.date}
              </p>
              <p className="text-gray-500">
                <strong>Alert Level:</strong> {alert.level}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No alerts at this moment.</p>
      )}
    </div>
  );
};

export default AlertsPage;
