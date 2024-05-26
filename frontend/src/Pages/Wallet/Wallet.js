import React, { useState, useEffect } from 'react';
import Card from './Card';

const Wallet = () => {
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users/6652f06802fa2bc5f91cc3b5');
        const data = await response.json();
        console.log(data);
        setBalance(data.balance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/transactions/6652f06802fa2bc5f91cc3b5');
        const data = await response.json();
        console.log(data.data);
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchBalance();
    fetchTransactions();
  }, []);

  return (
    <div className="bg-black min-h-screen p-8  px-12">
      <h1 className="text-white text-4xl font-bold pt-16 my-8">My Wallet</h1>
      <div className="flex flex-col gap-4">
        <Card
          titleClass="text-white text-3xl"
          contentClass="text-green-500 font-semibold text-3xl"
          leftText="Card Balance"
          rightText={balance === null ? 0 : balance}
        />
        {transactions.map((transaction, index) => (
          <Card
            key={index}
            titleClass="text-white"
            contentClass={transaction.balance_deducted > 0 ? 'text-red-500' : 'text-green-500'}
            leftText={`Previous transaction (Date: ${transaction.date})`}
            rightText={transaction.balance_deducted}
            item={transaction.item_purchased}
          />
        ))}
      </div>
    </div>
  );
};

export default Wallet;

