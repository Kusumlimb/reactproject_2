// components/Common/Footer.js
import React from 'react';
import './Footers.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 My Website. All rights reserved.</p>
      <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
