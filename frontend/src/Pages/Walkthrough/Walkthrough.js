import React from 'react';
import './wt.css'; // Import the howItWorks.css file for styling

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-black to-blue-900 min-h-screen text-white container"> {/* Black background with dark blue gradient */}
      <h1 className="text-4xl font-bold mb-8 heading">How It Works</h1> {/* Heading "How It Works" in bold */}
      <div className="text-section">
        <h2 className="text-xl font-bold mb-4">Step 1: Sign Up/Login</h2>
        <ul className="list-item">
          <li>New Users: Register for an account on the gaming platform's website.</li>
          <li>Existing Users: Log in to your account using your credentials.</li>
        </ul>
      </div>
      <div className="text-section">
        <h2 className="text-xl font-bold mb-4">Step 2: Add Funds to Virtual Card</h2>
        <ul className="list-item">
          <li>Navigate to the "Virtual Card" or "Wallet" section of the website.</li>
          <li>Choose the option to add funds to your virtual card using real money.</li>
          <li>Enter the desired amount you wish to add to your virtual card.</li>
        </ul>
      </div>
      <div className="text-section">
        <h2 className="text-xl font-bold mb-4">Step 3: Payment Processing</h2>
        <ul className="list-item">
          <li>Select your preferred payment method (credit/debit card, PayPal, etc.).</li>
          <li>Complete the payment process securely through the website's payment gateway.</li>
          <li>Once the payment is confirmed, the corresponding amount will be added to your virtual card balance.</li>
        </ul>
      </div>
      <div className="text-section">
        <h2 className="text-xl font-bold mb-4">Step 4: Explore Gaming Options</h2>
        <ul className="list-item">
          <li>Browse through the available games and in-game purchases on the platform.</li>
          <li>Select the game or item you want to purchase using your virtual card.</li>
        </ul>
      </div>
      <div className="text-section">
        <h2 className="text-xl font-bold mb-4">Step 5: Make a Purchase</h2>
        <ul className="list-item">
          <li>During the checkout process, choose the option to pay with your virtual card.</li>
          <li>Enter any required details, such as your virtual card number and security code.</li>
        </ul>
      </div>
      <div className="text-section">
        <h2 className="text-xl font-bold mb-4">Step 6: Confirmation</h2>
        <ul className="list-item">
          <li>Confirm the transaction details and authorize the payment.</li>
          <li>Upon successful completion, the purchased item or in-game currency will be added to your account.</li>
        </ul>
      </div>
      <div className="text-section">
        <h2 className="text-xl font-bold mb-4">Step 7: Enjoy Gaming</h2>
        <ul className="list-item">
          <li>Access your purchased content or in-game currency within the selected game.</li>
          <li>Enjoy an enhanced gaming experience with your new acquisitions.</li>
        </ul>
      </div>
      <div className="text-section">
        <h2 className="text-xl font-bold mb-4">Step 8: Manage Your Virtual Card</h2>
        <ul className="list-item">
          <li>Monitor your virtual card balance and transaction history through the website.</li>
          <li>Top up your virtual card balance whenever needed to continue making gaming transactions.</li>
        </ul>
      </div>
      <div className="text-section">
        <h2 className="text-xl font-bold mb-4">Additional Tips and Features</h2>
        <ul className="list-item">
          <li>Security Measures: Ensure that your virtual card details are kept confidential and not shared with anyone.</li>
          <li>Auto-Reload Option: Enable auto-reload to automatically add funds to your virtual card when the balance is low.</li>
          <li>Customer Support: Contact customer support for assistance with any issues related to your virtual card or transactions.</li>
          <li>Promotions and Discounts: Keep an eye out for special promotions or discounts offered for using your virtual card for gaming transactions.</li>
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
