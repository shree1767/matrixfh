import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = ({ setAuth }) => {
  const [form, setForm] = useState({
    username: '',
    fullname: '',
    email: '',
    phone: '',
    age: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        setAuth(true);
      } else {
        console.error(data.errors || data.message);
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
      alert('Error registering');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-800 p-8 shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Start Your Journey</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
              value={form.fullname}
              onChange={handleChange}
              required
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
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-3 rounded bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
              value={form.phone}
              onChange={handleChange}
              required
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
              required
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
              required
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
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-regular py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>Already have an account? <Link to="/" className="text-blue-500 hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
