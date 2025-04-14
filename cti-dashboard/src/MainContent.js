// src/MainContent.js
import React from 'react';
import './App.css';

function MainContent() {
  const openGovPortal = () => {
    window.open('https://cybercrime.gov.in/', '_blank');
  };

  return (
    <div className="main-content">
      <div className="section-title">Home</div>

      <div className="alert-card" onClick={() => window.location.href = "/customized-alerts"} style={{ cursor: 'pointer' }}>
        Customized Alerts
      </div>

      <div className="dual-cards">
        <div className="square-card" onClick={openGovPortal}>
          Cyber Complaint Launch
        </div>
        <div className="square-card" onClick={() => window.location.href = "/device-vulnerability-test"}>
          Device Vulnerability Test
        </div>
      </div>

      <div className="rectangle-card">[Reserved for Future Features]</div>
    </div>
  );
}

export default MainContent;
