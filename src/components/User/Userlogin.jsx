import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/login', data);
      console.log('User logged in successfully:', response.data);
      navigate("/userdashboard")
    } catch (error) {
      console.error('Error logging in:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Welcome Text */}
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Welcome to Arista</h1>
        <p className="text-center text-gray-600 mb-6">
          Your trusted neighborhood alert system. Log in to stay updated with real-time alerts and community news.
        </p>

        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">A valid email is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register('password', { required: true, minLength: 6 })}
              className={`w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">Password must be at least 6 characters</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Log In
          </button>
          <p className='text-zinc-500 mx-2 mt-2'>New to Arista?</p>
          <p className='text-zinc-500 mx-2'>Create an account <span onClick={()=>{
            navigate("/usersignup")
          }} className='m-1 hover:text-blue-700 cursor-pointer font-semibold text-zinc-700'>Signup</span></p>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
