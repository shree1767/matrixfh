import React from 'react';

const Card = ({ titleClass, contentClass, leftText, rightText }) => {
  return (
    <div className="card bg-gradient-to-b from-gray-900 to-transparent p-6 rounded-lg shadow-lg">
      <h2 className={`${titleClass} text-xl font-bold mb-4`}>{leftText}</h2>
      <p className={`${contentClass} text-lg`}>{rightText}</p>
    </div>
  );
};

export default Card;
