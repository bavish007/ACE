import React from 'react';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Active Students' },
    { number: '500+', label: 'Courses Available' },
    { number: '95%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Learning Officer',
      bio: 'Pioneering AI-driven educational methodologies with 15+ years in edtech innovation.'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Technology',
      bio: 'Leading the development of cutting-edge learning platforms and immersive experiences.'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Curriculum Director',
      bio: 'Designing future-ready curricula that prepare students for tomorrow\'s challenges.'
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="heading-primary">About NeoScholars</h1>
          <p className="text-body about-hero-text">
            We are revolutionizing education through cutting-edge technology, personalized learning experiences, 
            and a commitment to preparing students for the future. Our mission is to make quality education 
            accessible, engaging, and effective for learners worldwide.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card card">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="grid grid-2">
          <div className="mission-content card">
            <h2 className="heading-secondary">Our Mission</h2>
            <p className="text-body">
              To democratize education by leveraging artificial intelligence, machine learning, and immersive 
              technologies to create personalized learning experiences that adapt to each student's unique 
              needs and learning style.
            </p>
            <div className="mission-features">
              <div className="mission-feature">
                <span className="feature-icon">🎯</span>
                <span>Personalized Learning Paths</span>
              </div>
              <div className="mission-feature">
                <span className="feature-icon">🤖</span>
                <span>AI-Powered Analytics</span>
              </div>
              <div className="mission-feature">
                <span className="feature-icon">🌍</span>
                <span>Global Accessibility</span>
              </div>
            </div>
          </div>
          <div className="vision-content card">
            <h2 className="heading-secondary">Our Vision</h2>
            <p className="text-body">
              To become the world's leading platform for future-ready education, where every learner has 
              access to cutting-edge tools and methodologies that prepare them for success in an 
              ever-evolving digital landscape.
            </p>
            <div className="vision-highlights">
              <div className="vision-highlight">
                <h3>Innovation</h3>
                <p>Continuously pushing the boundaries of educational technology</p>
              </div>
              <div className="vision-highlight">
                <h3>Excellence</h3>
                <p>Maintaining the highest standards in educational content and delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet Our Leadership</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card card">
              <div className="team-avatar">
                <span className="avatar-initial">{member.name.charAt(0)}</span>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-content card">
          <h2 className="heading-secondary">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Embracing new technologies and methodologies to enhance learning outcomes</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>Fostering partnerships between students, educators, and technology</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>Maintaining the highest standards in everything we do</p>
            </div>
            <div className="value-item">
              <div className="value-icon">🌱</div>
              <h3>Growth</h3>
              <p>Supporting continuous learning and development for all stakeholders</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
