// src/pages/ContactUs.js
import React from 'react';
import '../App.css';

function ContactUs() {
  return (
    <div className="main-content">
      <h2 className="section-title">Contact Us</h2>

      <div className="rectangle-card">
        <p>
          Have questions, concerns, or feedback? We'd love to hear from you.
        </p>

        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <p><strong>Email:</strong> support@ctidashboard.com</p>
          <p><strong>Phone:</strong> +1 (800) 123-4567</p>
          <p><strong>Address:</strong> 123 Cyber Lane, Security City, SC 90210</p>
        </div>
      </div>

      <div className="rectangle-card" style={{ marginTop: '20px' }}>
        <p>Or fill out the contact form below:</p>
        <form style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <textarea placeholder="Your Message" rows="4" style={inputStyle} />
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: '#0D1117',
  color: '#f0f0f0'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#58A6FF',
  border: 'none',
  borderRadius: '6px',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default ContactUs;
