import React from 'react';
// Import the howItWorks.css file for styling

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-black to-blue-900 min-h-screen text-white py-16 px-8"> {/* Black background with dark blue gradient */}
      <h1 className="text-4xl font-bold mb-8">How It Works</h1> {/* Heading "How It Works" in bold */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">**Step 1: Sign Up/Login**</h2> {/* Step 1 heading in bold */}
        <ul className="list-disc ml-8">
          <li>**New Users**: Register for an account on the gaming platform's website.</li> {/* Text in bold */}
          <li>**Existing Users**: Log in to your account using your credentials.</li> {/* Text in bold */}
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">**Step 2: Add Funds to Virtual Card**</h2> {/* Step 2 heading in bold */}
        <ul className="list-disc ml-8">
          <li>Navigate to the "Virtual Card" or "Wallet" section of the website.</li>
          <li>Choose the option to add funds to your virtual card using real money.</li>
          <li>Enter the desired amount you wish to add to your virtual card.</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">**Step 3: Payment Processing**</h2> {/* Step 3 heading in bold */}
        <ul className="list-disc ml-8">
          <li>Select your preferred payment method (credit/debit card, PayPal, etc.).</li>
          <li>Complete the payment process securely through the website's payment gateway.</li>
          <li>Once the payment is confirmed, the corresponding amount will be added to your virtual card balance.</li>
        </ul>
      </div>
      {/* Repeat the same structure for remaining steps */}
      {/* Step 4 */}
      {/* Step 5 */}
      {/* Step 6 */}
      {/* Step 7 */}
      {/* Step 8 */}
      {/* Additional Tips and Features */}
      <div>
        <h2 className="text-xl font-bold mb-4">**Additional Tips and Features**</h2> {/* Additional Tips and Features heading in bold */}
        <ul className="list-disc ml-8">
          <li>**Security Measures**: Ensure that your virtual card details are kept confidential and not shared with anyone.</li> {/* Text in bold */}
          <li>**Auto-Reload Option**: Enable auto-reload to automatically add funds to your virtual card when the balance is low.</li> {/* Text in bold */}
          <li>**Customer Support**: Contact customer support for assistance with any issues related to your virtual card or transactions.</li> {/* Text in bold */}
          <li>**Promotions and Discounts**: Keep an eye out for special promotions or discounts offered for using your virtual card for gaming transactions.</li> {/* Text in bold */}
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
