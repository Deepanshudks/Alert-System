import React from 'react';
import { useNavigate } from 'react-router-dom';

const LawLoginSignup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Welcome to Arista Law Portal</h2>
        <p className="text-gray-600 mb-6">Choose an option to proceed</p>

        <div className="space-y-4">
          {/* Login Button */}
          <button
            onClick={() => navigate('/law-login')}
            className="w-full bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800"
          >
            Login
          </button>

          {/* Signup Button */}
          <button
            onClick={() => navigate('/law-signup')}
            className="w-full bg-gray-400 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-500"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawLoginSignup;
