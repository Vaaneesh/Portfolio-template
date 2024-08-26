import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import SkillsPage from './components/Skills';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Projects />
              <Recommendations />
              <ContactForm />
              <Footer />
            </>
          }
        />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
