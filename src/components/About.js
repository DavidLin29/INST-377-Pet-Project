import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1>Our Team</h1>
      <div className="team-grid">
        <div className="team-member">
          <h2>Pedro Mendonca</h2>
          <p className="role">Founder</p>
          <p>Passionate about animal welfare.</p>
        </div>
        <div className="team-member">
          <h2>David Lin</h2>
          <p className="role">Founder</p>
          <p>Passionate about animal welfare.</p>
        </div>
        <div className="team-member">
          <h2>Fadel Muzahdi</h2>
          <p className="role">Founder</p>
          <p>Passionate about animal welfare.</p>
        </div>
        <div className="team-member">
          <h2>Fatima Castillo</h2>
          <p className="role">Founder</p>
          <p>Passionate about animal welfare.</p>
        </div>
        <div className="team-member">
          <h2>Rheymar Devera</h2>
          <p className="role">Founder</p>
          <p>Passionate about animal welfare.</p>
        </div>
      </div>
    </div>
  );
};

export default About;