import React, { useState } from 'react';

const RegisterComplains = () => {
  const [complaintDetails, setComplaintDetails] = useState({
    subject: '',
    description: '',
    category: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaintDetails({ ...complaintDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., sending to backend or law enforcement system)
    console.log('Complaint Submitted:', complaintDetails);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-6">Register a Complaint</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Subject */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={complaintDetails.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter subject"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={complaintDetails.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe the issue"
              rows="5"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={complaintDetails.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Suspicious Activity">Suspicious Activity</option>
              <option value="Theft">Theft</option>
              <option value="Vandalism">Vandalism</option>
              <option value="Noise Complaint">Noise Complaint</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Contact Information */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="contact">
              Contact Information
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={complaintDetails.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone number or email"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComplains;
