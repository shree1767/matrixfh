import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signup = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    age: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-800 p-8 shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Start Your Journey</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="fullName">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              value={form.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your age"
              value={form.age}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Create Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-11"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-regular py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration:300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
