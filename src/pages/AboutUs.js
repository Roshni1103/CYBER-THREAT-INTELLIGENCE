// src/pages/AboutUs.js
import React from 'react';
import '../App.css';

function AboutUs() {
  return (
    <div className="main-content">
      <h2 className="section-title">About Us</h2>
      <div className="alert-card">
        <p>
          Welcome to <strong>CTI (Cyber Threat Intelligence)</strong>, your trusted partner in cybersecurity.
          Our mission is to empower individuals and organizations with the knowledge, tools, and support needed
          to defend against cyber threats in an ever-evolving digital landscape.
        </p>
      </div>

      <div className="dual-cards">
        <div className="square-card">
          <h3>Our Mission</h3>
          <p>
            We aim to raise awareness, educate users, and provide actionable intelligence to prevent and respond
            to cyber incidents effectively.
          </p>
        </div>
        <div className="square-card">
          <h3>What We Do</h3>
          <p>
            From threat simulation to real-time alerts and security training, we deliver comprehensive support
            to build cyber resilience.
          </p>
        </div>
      </div>

      <div className="rectangle-card" style={{ marginTop: '20px' }}>
        <h3>Meet the Team</h3>
        <p>
          Our team consists of cybersecurity analysts, software developers, and threat researchers passionate about making the digital world safer. We believe in proactive defense and collaborative intelligence sharing.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
