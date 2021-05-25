import React from 'react';
import "./stylesheet.css";
// import heroImage from '../../images/many-dogs-hero-2.png';
import heroImage from '../../images/dog-hero.webp';

function Hero() {
  return (
    <div className="hero-container container-fluid" style={{width: '100%'}}>
      {/* Hero Image */}
      <img className="hero" src={heroImage} alt="lots of doge" />
    </div>
  );
}

export default Hero;
