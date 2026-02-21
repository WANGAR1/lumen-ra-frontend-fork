import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Brand Section */}
        <div className="footer-section footer-brand">
          <h2>LUMEN-RA</h2>
          <p>
            Empowering men to become informed, trauma-aware allies 
            in supporting women.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/toolkit">Toolkit</Link></li>
            <li><Link to="/progress">Progress</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul className="footer-links">
            <li><Link to="/learning-modules">Learning Modules</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/support-services">Support Services</Link></li>
            <li><Link to="/crisis-resources">Crisis Resources</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h3>Legal</h3>
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service">Terms of Service</Link></li>
            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            {/* Linked to /contacts as requested */}
            <li><Link to="/contacts">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="bottom-left">
          © 2026 LUMEN-RA. All rights reserved. Advancing gender equality through informed allyship.
        </div>
        
        <div className="bottom-center">
          Website Designed by Graceland
        </div>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;