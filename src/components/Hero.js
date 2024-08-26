import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>I'm Vaaneesh Prabhakar</h1>
        <h2>
          <span className="highlight">Front-end</span> Developer
        </h2>
        <p>
        Bringing your web ideas to life with modern technologies and design principles.
        </p>
        <a href="#contact-form">
          <button>Hire Me</button>
        </a>
      </div>
      <div className="hero-image">
        <img src="/images/artist.png" alt="Hero" /> 
      </div>
      <img src="/images/Rectangle51.png" alt="Rectangle" className="decorative-image rectangle" />
      <img src="/images/Polygon1.png" alt="Polygon" className="decorative-image polygon" />
      <img src="/images/Rectangle52.png" alt="Triangle" className="decorative-image triangle" />
      <img src="/images/Ellipse15.png" alt="Circle" className="decorative-image circle" />

    </section>
  );
};

export default Hero;
