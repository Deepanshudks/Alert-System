import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserSignup = () => {
  const [term,setTerm] = useState(false)
  const navigate = useNavigate() 
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/user/signup', data);
      console.log('User signed up successfully:', response.data);
      navigate("/userdashboard")

    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Welcome Text */}
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-600">Welcome to Arista</h1>
        <p className="text-center text-gray-600 mb-6">
          Join our neighborhood alert system and stay informed about real-time alerts and important community updates.
        </p>

        <h2 className="text-2xl font-bold mb-5 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              {...register('fullName', { required: true })}
              className={`w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">Full name is required</p>}
          </div>

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

          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: true,
                validate: (value) => value === getValues('password'),
              })}
              className={`w-full px-3 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">Passwords must match</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              {...register('phoneNumber', { required: true, pattern: /^[0-9]{10}$/ })}
              className={`w-full px-3 py-2 border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">A valid phone number is required (10 digits)</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              {...register('address', { required: true })}
              className={`w-full px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">Address is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">ID Verification (e.g., Driver's License Number)</label>
            <input
              type="text"
              {...register('idVerification', { required: true })}
              className={`w-full px-3 py-2 border ${errors.idVerification ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.idVerification && <p className="text-red-500 text-sm mt-1">ID Verification is required</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Emergency Contact</label>
            <input
              type="text"
              {...register('emergencyContact', { required: true })}
              className={`w-full px-3 py-2 border ${errors.emergencyContact ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
            />
            {errors.emergencyContact && <p className="text-red-500 text-sm mt-1">Emergency contact is required</p>}
          </div>

          <div className="mb-6">
            <input
              type="checkbox"
              {...register('agreement', { required: true })}
              className="mr-2"
            />
            <label className="text-gray-700">
              I agree to the <a onClick={()=> setTerm(true)} href="#terms" className="text-blue-500">Terms and Conditions</a>
            </label>
            {errors.agreement && <p className="text-red-500 text-sm mt-1">You must agree to the terms</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
          <p onClick={()=>{
            navigate("/userlogin")
          }} className='text-zinc-600 m-2'>Already have an account? <span className='font-bold hover:text-zinc-900 hover:text-blue-600 cursor-pointer'>Login</span></p>
        </form>

        {/* Terms and Conditions Section */}
       {
        term && 
        <div id="terms" className="mt-8 text-gray-700">
        <h3 className="text-lg font-bold mb-2">Terms and Conditions</h3>
        <p><strong>1. Acceptance of Terms</strong></p>
        <p>By accessing and using our neighborhood alert system ("Arista"), you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our services.</p>
        <p><strong>2. Eligibility</strong></p>
        <p>You must be at least 18 years old to use our services. By agreeing to these terms, you represent and warrant that you are 18 years of age or older.</p>
        <p><strong>3. User Responsibilities</strong></p>
        <p>You agree to provide accurate and complete information during the signup process and to update your information as necessary. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
        <p><strong>4. Data Privacy</strong></p>
        <p>We are committed to protecting your personal information. Your data will be used in accordance with our Privacy Policy. By using our services, you consent to the collection, use, and sharing of your personal information as described in our Privacy Policy.</p>
        <p><strong>5. Use of Services</strong></p>
        <p>Our services are intended for lawful purposes only. You agree not to use our services for any illegal or unauthorized activities, including but not limited to harassment, defamation, or fraudulent activities.</p>
        <p><strong>6. Termination</strong></p>
        <p>We reserve the right to terminate or suspend your account at our discretion, with or without cause, and with or without notice, if you violate these terms or engage in any conduct that we deem inappropriate.</p>
        <p><strong>7. Disclaimer of Warranties</strong></p>
        <p>Our services are provided on an "as-is" and "as-available" basis. We make no warranties or representations, express or implied, regarding the availability, reliability, or accuracy of our services.</p>
        <p><strong>8. Limitation of Liability</strong></p>
        <p>To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.</p>
        <p><strong>9. Changes to Terms</strong></p>
        <p>We may update these terms and conditions from time to time. We will notify you of any significant changes by posting the new terms on our website. Your continued use of our services after any changes constitutes your acceptance of the new terms.</p>
        <p><strong>10. Contact Information</strong></p>
        <p>If you have any questions about these terms and conditions, please contact us at <a href="mailto:support@arista.com" className="text-blue-500">support@arista.com</a>.</p>
      </div>
       }
      </div>
    </div>
  );
};

export default UserSignup;
