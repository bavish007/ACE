import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: '🚀',
      title: 'Advanced Learning',
      description: 'Cutting-edge educational technology powered by AI and machine learning algorithms.'
    },
    {
      icon: '🎯',
      title: 'Personalized Experience',
      description: 'Tailored learning paths and adaptive content based on individual student progress.'
    },
    {
      icon: '🔮',
      title: 'Future-Ready Skills',
      description: 'Curriculum designed to prepare students for tomorrow\'s challenges and opportunities.'
    },
    {
      icon: '⚡',
      title: 'Real-time Analytics',
      description: 'Comprehensive insights and progress tracking with instant feedback systems.'
    }
  ];

  return (
    <div className={`home-page ${isVisible ? 'visible' : ''}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="hero-highlight">NeoScholars</span>
          </h1>
          <p className="hero-subtitle">
            The future of education is here. Experience learning reimagined with cutting-edge technology and innovative methodologies.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="floating-element element-1">🎓</div>
            <div className="floating-element element-2">💡</div>
            <div className="floating-element element-3">🔬</div>
            <div className="floating-element element-4">📚</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose NeoScholars?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content card">
          <h2 className="cta-title">Ready to Transform Your Learning?</h2>
          <p className="cta-description">
            Join thousands of students who are already experiencing the future of education with NeoScholars.
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary glow">
              Start Your Journey
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 