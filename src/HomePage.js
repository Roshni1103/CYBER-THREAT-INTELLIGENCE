// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="main-content">
      <div className="section-title">Home</div>

      {/* 🔔 Custom Alerts Card - navigates to /alerts */}
      <div className="alert-card" onClick={() => navigate('/alerts')}>
        Customized Alerts (Location Based)
      </div>

      {/* 💻 Complaint Launch and Vulnerability Test */}
      <div className="dual-cards">
        <div className="square-card">Cyber Complaint Launch</div>
        <div className="square-card">Device Vulnerability Test</div>
      </div>

      {/* 🛠 Reserved Section */}
      <div className="rectangle-card">[Reserved for Future Features]</div>
    </div>
  );
}

export default HomePage;
