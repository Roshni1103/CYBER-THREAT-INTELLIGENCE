// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Support from './Support';
import AwarenessHub from './pages/AwarenessHub';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs'; 
import AttackSimulator from './pages/AttackSimulator'; 
import DeviceVulnerabilityTest from './pages/DeviceVulnerabilityTest';
import CustomAlerts from './pages/CustomAlerts'; // ✅ Correct filename

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <div className="main-area">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/support" element={<Support />} />
            <Route path="/awareness" element={<AwarenessHub />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} /> 
            <Route path="/simulator" element={<AttackSimulator />} /> 
            <Route path="/device-vulnerability-test" element={<DeviceVulnerabilityTest />} />
            <Route path="/customized-alerts" element={<CustomAlerts />} /> {/* ✅ Fixed route target */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
