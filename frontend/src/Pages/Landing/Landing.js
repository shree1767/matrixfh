import React, { useState } from 'react';
import portraitImage from '../Landing/cd.png';

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState('');
  const [balance, setBalance] = useState('');

  const handlePayment = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/transaction/buy?gpn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, balance }),
      });
      if (response.ok) {
        alert('Payment successful!');
        // Optionally, you can close the modal or perform any other action upon successful payment
      } else {
        const data = await response.json();
        console.error('Payment failed:', data.message);
        alert(data.message || 'Payment failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Error processing payment');
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-center">
        {/* Content Section */}
        <div className="md:w-1/2">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">GamePay</h1>
          <p className="text-white text-lg md:text-xl mb-6">Enhance your gaming experience with Game-Pay.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => setShowModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            >
              Add Money
            </button>
            {/* Modal */}
            {showModal && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
                <div className="bg-white p-8 rounded-lg max-w-md">
                  <h2 className="text-xl font-semibold mb-4">Add Money</h2>
                  <input 
                    type="text" 
                    placeholder="Enter Username" 
                    className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                    value={user} 
                    onChange={(e) => setUser(e.target.value)} 
                  />
                  <input 
                    type="number" 
                    placeholder="Enter amount" 
                    className="w-full mb-4 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                    value={balance} 
                    onChange={(e) => setBalance(e.target.value)} 
                  />
                  <div className="flex justify-end">
                    <button 
                      onClick={() => {
                        setShowModal(false);
                        setUser('');
                        setBalance('');
                      }} 
                      className="text-gray-600 hover:text-gray-800 mr-4"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handlePayment}
                      className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                    >
                      Make Payment
                    </button>
                  </div>
                </div>
              </div>
            )}
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
