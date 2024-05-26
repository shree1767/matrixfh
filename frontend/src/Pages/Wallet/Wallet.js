// Wallet.js
import React, { useState, useEffect } from 'react';
import Card from './Card';

const Wallet = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users/6652f06802fa2bc5f91cc3b5');
        const data = await response.json();
        console.log(data)
        setBalance(data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="bg-black min-h-screen p-8 mt-5">
      <h1 className="text-white text-4xl font-bold pt-16 mb-8">My Wallet</h1>
      <div className="flex flex-col gap-4">
        <Card
          titleClass="text-white"
          contentClass="text-green-500"
          leftText="Your current balance:"
          rightText={balance===null?0:balance}
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
