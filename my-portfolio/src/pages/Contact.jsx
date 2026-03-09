import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="container">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">Feel free to reach out</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p>Farm5@abv.bg</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h3>Phone</h3>
                <p>+359 88 4713115</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h3>Location</h3>
                <p>Pazardzhik, Bulgaria</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text" id="name" name="name"
                value={formData.name} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email" id="email" name="email"
                value={formData.email} onChange={handleChange} required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows="5"
                value={formData.message} onChange={handleChange} required
              />
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;