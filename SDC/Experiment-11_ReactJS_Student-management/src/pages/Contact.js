import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      details: 'support@neoscholars.com',
      description: 'Get in touch with our support team'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Call us during business hours'
    },
    {
      icon: '🏢',
      title: 'Office',
      details: '123 Innovation Drive, Tech City, TC 12345',
      description: 'Visit our headquarters'
    },
    {
      icon: '⏰',
      title: 'Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'We\'re here to help you'
    }
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="heading-primary">Get in Touch</h1>
          <p className="text-body contact-hero-text">
            Have questions about NeoScholars? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="grid grid-2">
          {/* Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-card card">
              <h2 className="heading-secondary">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                  <label htmlFor="name" className="input-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="email" className="input-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="subject" className="input-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="input-group">
                  <label htmlFor="message" className="input-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="input-field textarea-field"
                    placeholder="Tell us more about your inquiry..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-info-card card">
              <h2 className="heading-secondary">Contact Information</h2>
              <p className="text-body contact-info-intro">
                Reach out to us through any of these channels. Our team is here to help you succeed.
              </p>
              
              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-icon">{info.icon}</div>
                    <div className="contact-info-content">
                      <h3 className="contact-info-title">{info.title}</h3>
                      <p className="contact-info-details">{info.details}</p>
                      <p className="contact-info-description">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-content card">
          <h2 className="heading-secondary">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How do I get started with NeoScholars?</h3>
              <p className="faq-answer">
                Simply register for an account, complete your profile, and start exploring our courses. 
                Our AI will recommend the best learning path for you.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What makes NeoScholars different?</h3>
              <p className="faq-answer">
                We combine cutting-edge AI technology with personalized learning experiences, 
                real-time analytics, and future-ready curriculum design.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is there technical support available?</h3>
              <p className="faq-answer">
                Yes! Our support team is available 24/7 through email, phone, and live chat 
                to help you with any technical issues or questions.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I access courses on mobile devices?</h3>
              <p className="faq-answer">
                Absolutely! NeoScholars is fully responsive and optimized for all devices, 
                including smartphones, tablets, and desktop computers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
