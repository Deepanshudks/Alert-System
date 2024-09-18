import React, { useState, useEffect } from 'react';

const PreviousComplaints = () => {
  const [complaints, setComplaints] = useState([]);

  // Simulate fetching complaints from an API or backend
  useEffect(() => {
    const fetchedComplaints = [
      {
        id: 1,
        subject: 'Suspicious Activity near park',
        description: 'There have been strangers lingering near the children’s playground.',
        category: 'Suspicious Activity',
        date: '2024-09-18',
        contact: 'john.doe@gmail.com',
      },
      {
        id: 2,
        subject: 'Vandalism on Main Street',
        description: 'Multiple cars were scratched overnight on Main Street.',
        category: 'Vandalism',
        date: '2024-09-17',
        contact: 'jane.doe@gmail.com',
      },
      // Add more sample complaints here
    ];

    setComplaints(fetchedComplaints);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Previous Complaints</h2>

      {complaints.length > 0 ? (
        <div className="max-w-4xl mx-auto">
          {complaints.map((complaint) => (
            <div
              key={complaint.id}
              className="bg-white p-6 mb-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{complaint.subject}</h3>
              <p className="text-gray-700 mb-2">
                <strong>Category:</strong> {complaint.category}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Description:</strong> {complaint.description}
              </p>
              <p className="text-gray-500 mb-2">
                <strong>Date:</strong> {complaint.date}
              </p>
              <p className="text-gray-500">
                <strong>Contact:</strong> {complaint.contact}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No complaints have been registered yet.</p>
      )}
    </div>
  );
};

export default PreviousComplaints;
