import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['hero', 'projects', 'recommendations', 'contact-form'];
    let currentSection = 'home';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element && window.scrollY >= element.offsetTop - 60 && window.scrollY < (element.offsetTop + element.offsetHeight - 60)) { // Adjust offset and range as needed
        currentSection = section;
      }
    });

    setActiveSection(currentSection);
    console.log(`Active section: ${currentSection}`); // Debugging information
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="/" className={activeSection === 'hero' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
            Projects
          </a>
        </li>
        <li>
          <a href="#recommendations" className={activeSection === 'recommendations' ? 'active' : ''}>
            Recommendations
          </a>
        </li>
        <li>
          <a href="#contact-form" className={activeSection === 'contact-form' ? 'active' : ''}>
            Contact
          </a>
        </li>
        <li>
          <a href="/skills" className={activeSection === 'skills' ? 'active' : ''}>
            Skills
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
