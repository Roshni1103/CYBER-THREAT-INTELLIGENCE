// src/pages/AlertsPage.js
import React, { useEffect, useState } from 'react';
import '../App.css';

function AlertsPage() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/alerts')
      .then(res => res.json())
      .then(data => setAlerts(data))
      .catch(err => console.error('Error fetching alerts:', err));
  }, []);

  return (
    <div className="main-content">
      <div className="section-title">Customised Alerts</div>
      {alerts.length === 0 ? (
        <div className="alert-card">No alerts available at the moment.</div>
      ) : (
        alerts.map((alert, index) => (
          <div className="alert-card" key={index}>
            <strong>{alert.title}</strong>
            <p>{alert.description}</p>
            {alert.link && (
              <a href={alert.link} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default AlertsPage;
