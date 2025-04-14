// src/pages/AttackSimulator.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttackSimulator.css';

function AttackSimulator() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Track the steps of the simulator

  // Simple content for the Phishing Detection Game
  const phishingGame = (
    <div className="attack-game">
      <h2>Phishing Detection Game</h2>
      <p>Which of these URLs is a phishing attempt?</p>
      <ul>
        <li onClick={() => alert("Correct!")}>https://www.securebank.com</li>
        <li onClick={() => alert("Wrong! That's a phishing site.")}>https://www.securebank.login.com</li>
      </ul>
    </div>
  );

  // Simple content for the Click-the-Threat Quiz
  const clickTheThreatQuiz = (
    <div className="attack-game">
      <h2>Click-the-Threat Quiz</h2>
      <p>Which of these files is suspicious?</p>
      <ul>
        <li onClick={() => alert("That's a dangerous file!")}>report.pdf</li>
        <li onClick={() => alert("Correct!")}>invoice.exe</li>
      </ul>
    </div>
  );

  // Simple content for the Simulated Login Attack
  const loginAttackSimulator = (
    <div className="attack-game">
      <h2>Simulated Login Attack</h2>
      <p>This is an example of an insecure login form:</p>
      <input type="text" placeholder="Enter username" />
      <input type="password" placeholder="Enter password" />
      <button onClick={() => alert("Warning! This form is insecure.")}>Submit</button>
    </div>
  );

  // Simple content for Spot-the-Malware Game
  const spotMalwareGame = (
    <div className="attack-game">
      <h2>Spot the Malware</h2>
      <p>Which of these files is malicious?</p>
      <ul>
        <li onClick={() => alert("Correct! That's malware.")}>malicious_file.exe</li>
        <li onClick={() => alert("That's safe.")}>safe_document.pdf</li>
      </ul>
    </div>
  );

  return (
    <div className="attack-simulator">
      <h1>Attack Simulator</h1>
      <div className="steps">
        {step === 1 && phishingGame}
        {step === 2 && clickTheThreatQuiz}
        {step === 3 && loginAttackSimulator}
        {step === 4 && spotMalwareGame}
      </div>
      <div className="navigation-buttons">
        <button onClick={() => setStep(step === 1 ? 1 : step - 1)}>Previous</button>
        <button onClick={() => setStep(step === 4 ? 4 : step + 1)}>Next</button>
      </div>
    </div>
  );
}

export default AttackSimulator;
