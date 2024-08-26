import React from 'react';
import './Footer.css'; 
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Logo" /> 
        </div>

        <div className="footer-additional-logos">
          <img src="/images/footer.png" alt="Additional Logos" />
        </div>

        <div className="footer-links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#recommendations">Recommendations</a></li>
            <li><a href="/#contact-form">Contact</a></li> {/* Link to the ContactForm section */}
            <li><Link to="/skills">Skills</Link></li> 
          </ul>
        </div>

        <div className="footer-social">
          <a href="https://www.instagram.com/_.vaaneesh._/"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/vaaneesh-prabhakar-160276221/"><FaLinkedin /></a>
          <a href="https://x.com/Vaaneesh_01"><FaTwitter /></a>
        </div>
      </div>

      <p className="footer-copyright">© 2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;
