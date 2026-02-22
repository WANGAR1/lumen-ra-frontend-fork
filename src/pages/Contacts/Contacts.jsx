import React from 'react';
import './Contacts.css';
// Add this import line!
import { Mail, MapPin, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const Contacts = () => {
  return (
    <div className="contact-container">
      <div className="header-section">
        <h1>Get In Touch</h1>
        <div className="orange-line"></div>
        <p>We'd love to hear from you</p>
      </div>

      <div className="main-content">
        {/* LEFT: Form */}
        <div className="form-card">
          <h2>Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Tell us how we can help..."></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        {/* RIGHT: Info */}
        <div className="info-column">
          <div className="info-card">
            <div className="icon-circle"><Mail size={20} color="white" /></div>
            <div>
              <h3>Email</h3>
              <p>support@lumen-ra.org</p>
              <p>info@lumen-ra.org</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-circle"><MapPin size={20} color="white" /></div>
            <div>
              <h3>Location</h3>
              <p>Available globally</p>
              <p>Digital platform accessible 24/7</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon-circle"><Share2 size={20} color="white" /></div>
            <div>
              <h3>Follow Us</h3>
              <div className="social-icons">
                <span className="social-circle"><Facebook size={16} /></span>
                <span className="social-circle"><Twitter size={16} /></span>
                <span className="social-circle"><Linkedin size={16} /></span>
              </div>
            </div>
          </div>

          <div className="emergency-card">
            <h3>Emergency Resources</h3>
            <p>If you or someone you know needs immediate help, please contact:</p>
            <p><strong>National Crisis Hotline: 1-800-XXX-XXXX</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;