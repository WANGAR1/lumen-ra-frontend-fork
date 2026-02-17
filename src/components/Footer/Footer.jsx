import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <ul className="footer-links">
            <li><a href="#about">About us</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#downloads">Downloads</a></li>
            <li><a href="#contact">Contact us</a></li>
          </ul>
        </div>

        <div className="footer-center">
          <ul className="footer-policies">
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <div className="footer-social">
            <a href="#facebook" className="social-icon">f</a>
            <a href="#instagram" className="social-icon">📷</a>
            <a href="#twitter" className="social-icon">𝕏</a>
          </div>
          <div className="footer-cta">Sign up for more rewards</div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">© 2026 Lumera</span>
        <span className="footer-design">Website designed by Graceland</span>
      </div>
    </footer>
  )
}

export default Footer
