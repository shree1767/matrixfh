import React from 'react';
import { FaWallet, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between bg-gray-800 py-4 px-10 z-50">
      <Link to='/' className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8" />
      </Link>
      <div className="flex items-center space-x-8">
        {/* Wallet Icon */}
        <Link to='/wallet'><FaWallet className="text-white text-2xl" /></Link>
        {/* Cart Icon */}
        <Link to='/cart'><FaShoppingCart className="text-white text-2xl" /></Link>
        {/* Profile Icon */}
        <Link to='/profile'><FaUser className="text-white text-2xl" /></Link>
      </div>
    </nav>
  );
};

export default Navbar;
