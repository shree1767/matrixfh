import React from 'react';
import portraitImage from '../Landing/cd.png';

const LandingPage = () => {
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-center">
        {/* Content Section */}
        <div className="md:w-1/2">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">GamePay</h1>
          <p className="text-white text-lg md:text-xl mb-6">Enhance your gaming experience with Game-Pay.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">Make New Card</button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300">Add Money</button>
          </div>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src={portraitImage} alt="Game Illustration" className="w-full md:max-w-lg mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
