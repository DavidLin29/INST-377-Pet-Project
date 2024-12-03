import React, { useState } from 'react';
import './Help.css';

const Help = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="help-page">
      <h1>Help Center</h1>
      
      <section className="guide-section">
        <h2>Getting Started</h2>
        <div className="guide-cards">
          <div className="guide-card">
            <h3>Find a Shelter</h3>
            <p>Learn how to search and connect with local shelters in your area.</p>
            <div className="video-container">
              {/* Replace with actual video embed bc idk what the heck to put here*/}
              <iframe src="https://www.youtube.com/embed/example1" title="Shelter Search Tutorial"></iframe>
            </div>
          </div>
          <div className="guide-card">
            <h3>Adoption Process</h3>
            <p>Step-by-step guide to our adoption process.</p>
            <div className="video-container">
              {/* Replace with actual video embed bc idk what the heck to put here*/}
              <iframe src="https://www.youtube.com/embed/example2" title="Adoption Guide"></iframe>
            </div>
          </div>
          <div className="guide-card">
            <h3>App Navigation</h3>
            <p>Learn how to use all features of our application.</p>
            <div className="video-container">
              {/* Replace with actual video embed bc idk what the heck to put here*/}
              <iframe src="https://www.youtube.com/embed/example3" title="App Navigation"></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {/* Add FAQ items here */}
      </section>

      <section className="contact-section">
        <h2>Still Have Questions?</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <textarea
            placeholder="Your Question"
            value={formData.question}
            onChange={(e) => setFormData({...formData, question: e.target.value})}
          ></textarea>
          <button type="submit">Send Question</button>
        </form>
      </section>
    </div>
  );
};

export default Help;
