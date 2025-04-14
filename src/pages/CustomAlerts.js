import React, { useEffect, useState } from 'react';
import '../CustomAlerts.css'; // Optional: if you want to style it
import axios from 'axios';

const CustomAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/alerts')
      .then(response => {
        setAlerts(response.data);
      })
      .catch(error => {
        console.error('Error fetching alerts:', error);
      });
  }, []);

  return (
    <div className="custom-alerts-container">
      <h2>Cyber Threat Intelligence Alerts</h2>
      <ul className="alerts-list">
        {alerts.map((alert, index) => (
          <li key={index} className="alert-item">
            <h3>{alert.title}</h3>
            <a href={alert.link} target="_blank" rel="noopener noreferrer">{alert.link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomAlerts;
