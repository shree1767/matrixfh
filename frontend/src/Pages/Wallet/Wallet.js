import React from 'react';
import Card from './Card';

const Wallet = () => {
  return (
    <div className="wallet bg-black min-h-screen p-8">
      <h1 className="text-white text-4xl font-bold mb-8 font-serif">My Wallet</h1>
      <div className="flex flex-col gap-4">
        <Card
          titleClass="text-white"
          contentClass="text-green-500"
          leftText="Your current balance:"
          rightText="1000"
        />
        <Card
          titleClass="text-white"
          contentClass="text-red-500"
          leftText="Previous transaction (Date: 31-05-24)"
          rightText="-83"
        />
        <Card
          titleClass="text-white"
          contentClass="text-green-500"
          leftText="Previous transaction (Date: 31-05-24)"
          rightText="+183"
        />
        <Card
          titleClass="text-white"
          contentClass="text-red-500"
          leftText="Previous transaction (Date: 03-05-24)"
          rightText="-26"
        />
      </div>
    </div>
  );
};

export default Wallet;
