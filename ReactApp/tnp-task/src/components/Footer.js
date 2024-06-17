import React from 'react';
import './Footer.css'; // Create a separate CSS file
import instagramImg from '../assets/instagram.png';
import telegramImg from '../assets/telegram.png';
import linkedinImg from '../assets/linkedin.png';


function Footer() {
  return (
    <footer className="footer">
        <div>
            <h4>VAST COMMUNITY OF STUDNETS</h4>
        </div>

        <div className="social-links">
            <div className="social-link">
                <span>2.5 K+</span>
                <img src={instagramImg} alt="Instagram" />
            </div>
            <div className="social-link">
                <span>50 K+</span>
                <img src={telegramImg} alt="Telegram" />
            </div>
            <div className="social-link">
            <span>29 K+</span>
            <img src={linkedinImg} alt="LinkedIn" />
            </div>
      </div>
    </footer>
  );
}

export default Footer;
