// src/Sidebar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLifeRing, FaGraduationCap, FaBug, FaInfoCircle, FaEnvelope, FaBars } from 'react-icons/fa';
import './App.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const items = [
    { icon: <FaLifeRing />, label: "Cybersecurity Support", route: "/support" },
    { icon: <FaGraduationCap />, label: "Awareness Hub", route: "/awareness" },
    { icon: <FaBug />, label: "Attack Simulator", route: "/simulator" },
    { icon: <FaInfoCircle />, label: "About Us", route: "/about" },
    { icon: <FaEnvelope />, label: "Contact Us", route: "/contact" }
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}> {/* Corrected this line */}
      <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>

      {/* CTI Logo at the top, clickable */}
      <div className="logo" onClick={() => navigate('/')}>
        CTI
      </div>

      {isOpen && items.map((item, index) => (
        <div className="sidebar-item" key={index} onClick={() => navigate(item.route)}>
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
