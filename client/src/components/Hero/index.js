import React from 'react';
import "./stylesheet.css";
// import heroImage from '../../images/many-dogs-hero-2.png';
// import heroImage from '../../images/dog-hero.webp';
import heroImage from '../../images/giphy.gif';

function Hero() {
  return (
    <div className="hero-container container-fluid" style={{width: '100%'}}>
      {/* Hero Image */}
      <img className="hero" src={heroImage} alt="happy tail dog" />
    </div>
  );
}

export default Hero;
