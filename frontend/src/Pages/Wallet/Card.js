import React from 'react';

const Card = ({ titleClass, contentClass, leftText, rightText,item }) => {
  return (
    <div className="wallet-card bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className='flex justify-between'>
        <h2 className={`${titleClass}  font-bold mb-4`}>{leftText}</h2>
        <p className={`${contentClass} text-xl`}>{rightText}</p>
      </div>
      {item &&       <div className='text-white text-2xl font-bold'>Item Purchased : {item}</div>}

    </div>
  );
};

export default Card;