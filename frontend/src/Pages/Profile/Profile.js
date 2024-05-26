import React from 'react';
import { MailIcon, UserCircleIcon, TrashIcon, CurrencyDollarIcon, ShoppingCartIcon, GiftIcon } from '@heroicons/react/solid'; // Import icons from Heroicons
import './profile.css'; // Import the profile.css file for styling
import profileImage from '../Profile/jr.png'; // Import the profile image

const Profile = () => {
  return (
    <div className="bg-black min-h-screen pt-16 pr-25 pl-25"> {/* Added pr-25 and pl-25 classes for padding */}
      <div className="container mx-auto p-8">
        {/* Profile Header with Heading */}
        <div className="mb-8">
          <h1 className="text-white font-bold text-4xl mb-4 font-serif">Profile</h1> {/* Heading "Profile" */}
          {/* Profile Photo and User Information */}
          <div className="flex items-center">
            {/* Circular Profile Picture */}
            <div className="rounded-full overflow-hidden border-4 border-white mr-4">
              <img src={profileImage} alt="Profile" className="w-24 h-24" />
            </div>
            {/* Card with User Information */}
            <div>
              <div className="profile-card">
                <p className="text-white">Name: Jigyasa</p>
                <p className="text-white">User ID: Matrix01_Glitch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Column 1 */}
          <div>
            <div className="profile-card flex items-center">
              <CurrencyDollarIcon className="h-6 w-6 mr-2 text-white" /> {/* Icon */}
              <p className="text-white flex-grow">Wallet</p> {/* Text */}
            </div>
            <div className="profile-card mt-4 flex items-center">
              <ShoppingCartIcon className="h-6 w-6 mr-2 text-white" /> {/* Icon */}
              <p className="text-white flex-grow">Purchases</p> {/* Text */}
            </div>
            <div className="profile-card mt-4 flex items-center">
              <GiftIcon className="h-6 w-6 mr-2 text-white" /> {/* Icon */}
              <p className="text-white flex-grow">Rewards</p> {/* Text */}
            </div>
          </div>
          {/* Column 2 */}
          <div>
            <div className="profile-card flex items-center">
              <UserCircleIcon className="h-6 w-6 mr-2 text-white" /> {/* Icon */}
              <p className="text-white flex-grow">Saved Information</p> {/* Text */}
            </div>
            <div className="profile-card mt-4 flex items-center">
              <TrashIcon className="h-6 w-6 mr-2 text-white" /> {/* Icon */}
              <p className="text-white flex-grow">Delete Account</p> {/* Text */}
            </div>
            <div className="profile-card mt-4 flex items-center">
              <MailIcon className="h-6 w-6 mr-2 text-white" /> {/* Icon */}
              <p className="text-white flex-grow">Contact Us</p> {/* Text */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
