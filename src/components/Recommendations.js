import React, { useEffect, useState } from 'react';
import './Recommendations.css';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/recommendations')
      .then((response) => response.json())
      .then((data) => setRecommendations(data))
      .catch((error) => console.error('Error fetching recommendations:', error));
  }, []);

  return (
    <section id="recommendations" className="recommendations-section">
      <h2 className="recommendations-heading">Recommendations</h2>
      <div className="recommendations-cards">
        {recommendations.map((rec) => (
          <div key={rec.id} className="recommendation-card">
            <div className="stars">
              {'★'.repeat(rec.rating)}
            </div>
            <h3 className="recommendation-title">{rec.title}</h3>
            <p className="recommendation-comment">{rec.comment}</p>
            <div className="recommendation-author">
              <img src={rec.image} alt={rec.name} className="author-image" />
              <div>
                <h4 className="author-name">{rec.name}</h4>
                <p className="author-profession">{rec.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
