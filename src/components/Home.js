import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Recommendations from './Recommendations';
import ContactForm from './ContactForm';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Recommendations />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
