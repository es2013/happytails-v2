import React from 'react';
import "./stylesheet.css";
import heroImage from '../../images/many-dogs-hero-2.png';

function Hero() {
  return (
    <div className="hero-container">
      {/* Hero Image */}
      <img className="hero" src={heroImage} alt="lots of doge" />
    </div>
  );
}

export default Hero;
