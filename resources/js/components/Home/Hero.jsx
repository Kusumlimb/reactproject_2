// components/Common/Hero.js
import React from 'react';
import './Heros.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to My Website</h1>
        <p>Discover amazing content and learn more about what we do.</p>
        <a href="#about" className="hero-button">Learn More</a>
      </div>
    </div>
  );
}

export default Hero;
