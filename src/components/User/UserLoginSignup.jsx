import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserLoginSignup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h2 className="text-3xl font-semibold mb-8">Welcome to Arista</h2>
        <p className="text-gray-600 mb-6">
          Please login or signup to continue
        </p>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/userlogin')}
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/usersignup')}
            className="w-full bg-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-400"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLoginSignup;
