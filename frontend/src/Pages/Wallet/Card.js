import React from 'react';

const Card = ({ titleClass, contentClass, leftText, rightText }) => {
  return (
    <div className="wallet-card bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className={`${titleClass} text-xl font-bold mb-4`}>{leftText}</h2>
      <p className={`${contentClass} text-lg`}>{rightText}</p>
    </div>
  );
};

export default Card;