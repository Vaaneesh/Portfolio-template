import React, { useState, useEffect } from 'react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ domain: '', skill: '', proficiency: '' });
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/skills')
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error('Error fetching skills:', error));
  }, []);

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
      .then((data) => {
        setSkills([...skills, data]);
        setNewSkill({ domain: '', skill: '', proficiency: '' });
        setFormVisible(false); 
      })
      .catch((error) => console.error('Error adding skill:', error));
  };

  return (
    <div className="skills-page">
      <Navbar />
      <section className="skills-section">
        <h1>Skills & Languages</h1>
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <h2>{skill.skill}</h2>
              <p><strong>Domain:</strong> {skill.domain}</p>
              <div className="proficiency-bar">
                <div 
                  className="proficiency-fill" 
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p><strong>Proficiency:</strong> {skill.proficiency}%</p>
            </div>
          ))}
        </div>
        <div className="add-skill-button">
          <button onClick={() => setFormVisible(!formVisible)}>
            {formVisible ? 'Hide Form' : 'Add Skill'}
          </button>
        </div>
        {formVisible && (
          <div className="add-skill-form">
            <button className="close-button" onClick={() => setFormVisible(false)}>
              &times;
            </button>
            <h2>Add a New Skill</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className='Submit-button'>Add Skill</button>
            </form>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Skills;
