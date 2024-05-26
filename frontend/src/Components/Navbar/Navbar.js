import React from 'react';
import { FaWallet, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({setAuth}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(false);
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between bg-neutral-900 py-7 px-10 z-50">
      <div className="flex items-center pl-2 justify-between space-x-8">
        <Link to='/'><h1 className='font-bold text-white'>GAMEPAY</h1></Link>
        <Link to='/walkthrough' className='text-sm font-medium text-white'>How it works</Link>
      </div>
      <div className="flex items-center space-x-8">
        {/* Wallet Icon */}
        <Link to='/wallet'><FaWallet className="text-white text-xl" /></Link>
        {/* Profile Icon */}
        <Link to='/profile'><FaUser className="text-white text-xl" /></Link>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="text-white text-sm font-medium bg-red-600 py-1 px-3 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;