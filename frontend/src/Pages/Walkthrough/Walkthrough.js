import React from 'react';

const HowItWorks = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-16 px-4 md:px-12 mt-10">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">How It Works</h1>
        {steps.map((step, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{step.title}</h2>
            <ul className="list-disc pl-6">
              {step.items.map((item, idx) => (
                <li key={idx} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};


const steps = [
  {
    title: "Step 1: Sign Up/Login",
    items: [
      "New Users: Register for an account on the gaming platform's website.",
      "Existing Users: Log in to your account using your credentials."
    ]
  },
  {
    title: "Step 2: Add Funds to Virtual Card",
    items: [
      "Navigate to the 'Virtual Card' or 'Wallet' section of the website.",
      "Choose the option to add funds to your virtual card using real money.",
      "Enter the desired amount you wish to add to your virtual card."
    ]
  },
  {
    title: "Step 3: Payment Processing",
    items: [
      "Select your preferred payment method (credit/debit card, PayPal, etc.).",
      "Complete the payment process securely through the website's payment gateway.",
      "Once the payment is confirmed, the corresponding amount will be added to your virtual card balance."
    ]
  },
  {
    title: "Step 4: Explore Gaming Options",
    items: [
      "Browse through the available games and in-game purchases on the platform.",
      "Select the game or item you want to purchase using your virtual card."
    ]
  },
  {
    title: "Step 5: Make a Purchase",
    items: [
      "During the checkout process, choose the option to pay with your virtual card.",
      "Enter any required details, such as your virtual card number and security code."
    ]
  },
  {
    title: "Step 6: Confirmation",
    items: [
      "Confirm the transaction details and authorize the payment.",
      "Upon successful completion, the purchased item or in-game currency will be added to your account."
    ]
  },
  {
    title: "Step 7: Enjoy Gaming",
    items: [
      "Access your purchased content or in-game currency within the selected game.",
      "Enjoy an enhanced gaming experience with your new acquisitions."
    ]
  },
  {
    title: "Step 8: Manage Your Virtual Card",
    items: [
      "Monitor your virtual card balance and transaction history through the website.",
      "Top up your virtual card balance whenever needed to continue making gaming transactions."
    ]
  },
  {
    title: "Additional Tips and Features",
    items: [
      "Security Measures: Ensure that your virtual card details are kept confidential and not shared with anyone.",
      "Auto-Reload Option: Enable auto-reload to automatically add funds to your virtual card when the balance is low.",
      "Customer Support: Contact customer support for assistance with any issues related to your virtual card or transactions.",
      "Promotions and Discounts: Keep an eye out for special promotions or discounts offered for using your virtual card for gaming transactions."
    ]
  }
];

export default HowItWorks;
