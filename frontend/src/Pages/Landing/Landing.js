import React from 'react';
import './lp.css'; // Import the lp.css file for styling
import portraitImage from '../Landing/cd.png'; // Update the path to your image

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="content">
        <h1 className="title">GamePay</h1>
        <p className="slogan">Enhance your Game Play with our Game-Pay.</p>
        <div className="buttons">
          <button className="landing-button">Make New Card</button>
          <button className="landing-button">Add Money</button>
        </div>
      </div>
      <div className="image-container">
        <img src={portraitImage} alt="Game Illustration" className="portrait-image" />
      </div>
    </div>
  );
};

export default LandingPage;
