import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './AddSkill.css';

const AddSkill = () => {
  const [newSkill, setNewSkill] = useState({ domain: '', skill: '', proficiency: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSkill({
      ...newSkill,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/skills', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newSkill),
    })
      .then((response) => response.json())
      .then(() => {
        setNewSkill({ domain: '', skill: '', proficiency: '' });
      })
      .catch((error) => console.error('Error adding skill:', error));
  };

  return (
    <div className="add-skill-page">
      <Navbar />
      <section className="add-skill-section">
        <h1>Add a New Skill</h1>
        <form onSubmit={handleSubmit} className="add-skill-form">
          <div className="form-group">
            <label htmlFor="domain">Domain</label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={newSkill.domain}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="skill">Skill</label>
            <input
              type="text"
              id="skill"
              name="skill"
              value={newSkill.skill}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="proficiency">Proficiency (%)</label>
            <input
              type="number"
              id="proficiency"
              name="proficiency"
              value={newSkill.proficiency}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default AddSkill;
