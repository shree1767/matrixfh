import React from 'react';
import { MailIcon, UserCircleIcon, TrashIcon, CurrencyDollarIcon, ShoppingCartIcon, GiftIcon } from '@heroicons/react/solid';
import profileImage from '../Profile/jr.png';

const Profile = () => {
  return (
    <div className="bg-black min-h-screen pt-16 px-6 md:px-25 mt-10">
      <div className="container mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-white font-bold text-4xl mb-4">Profile</h1>
          <div className="flex items-center mb-8">
            <div className="rounded-full overflow-hidden border-4 border-white mr-4">
              <img src={profileImage} alt="Profile" className="w-32 h-32" />
            </div>
            <div className="text-white">
              <p className="text-lg">Name: Jigyasa</p>
              <p className="text-lg">User ID: Matrix01_Glitch</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center bg-opacity-30 bg-blue-900 border border-white p-4 rounded-lg hover:bg-opacity-50 transition duration-300">
              <CurrencyDollarIcon className="h-6 w-6 mr-2 text-white" />
              <p className="text-white flex-grow">Wallet</p>
            </div>
            <div className="flex items-center bg-opacity-30 bg-blue-900 border border-white p-4 rounded-lg mt-4 hover:bg-opacity-50 transition duration-300">
              <ShoppingCartIcon className="h-6 w-6 mr-2 text-white" />
              <p className="text-white flex-grow">Purchases</p>
            </div>
            <div className="flex items-center bg-opacity-30 bg-blue-900 border border-white p-4 rounded-lg mt-4 hover:bg-opacity-50 transition duration-300">
              <GiftIcon className="h-6 w-6 mr-2 text-white" />
              <p className="text-white flex-grow">Rewards</p>
            </div>
          </div>
          <div>
            <div className="flex items-center bg-opacity-30 bg-blue-900 border border-white p-4 rounded-lg hover:bg-opacity-50 transition duration-300">
              <UserCircleIcon className="h-6 w-6 mr-2 text-white" />
              <p className="text-white flex-grow">Saved Information</p>
            </div>
            <div className="flex items-center bg-opacity-30 bg-blue-900 border border-white p-4 rounded-lg mt-4 hover:bg-opacity-50 transition duration-300">
              <TrashIcon className="h-6 w-6 mr-2 text-white" />
              <p className="text-white flex-grow">Delete Account</p>
            </div>
            <div className="flex items-center bg-opacity-30 bg-blue-900 border border-white p-4 rounded-lg mt-4 hover:bg-opacity-50 transition duration-300">
              <MailIcon className="h-6 w-6 mr-2 text-white" />
              <p className="text-white flex-grow">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
