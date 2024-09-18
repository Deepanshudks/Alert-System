import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreviousComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // useEffect(() => {
  //   const fetchComplaints = async () => {
  //     try {
  //       const response = await axios.get('/api/law-enforcement/complaints');
  //       setComplaints(response.data.complaints);
  //     } catch (error) {
  //       setErrorMessage('Failed to fetch complaints. Please try again later.');
  //       console.error('Error fetching complaints:', error);
  //     }
  //   };

  //   fetchComplaints();
  // }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Previous Complaints</h2>

      {errorMessage && (
        <p className="text-center text-red-500 mb-4">{errorMessage}</p>
      )}

      {complaints.length > 0 ? (
        <div className="max-w-4xl mx-auto">
          {complaints.map((complaint) => (
            <div
              key={complaint.complaintId}
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
                <strong>Date:</strong> {new Date(complaint.createdAt).toLocaleDateString()}
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
