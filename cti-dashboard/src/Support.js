// src/Support.js
import React from 'react';
import './App.css';

function Support() {
  return (
    <div className="main-content">
      <div className="section-title">Cybersecurity Support</div>

      {/* Section 1: Common Issues & Fixes */}
      <div className="alert-card">
        <h3>🧰 Common Issues & Fixes</h3>
        <p><strong>Malware:</strong> Malware is malicious software designed to disrupt, damage, or gain unauthorized access to systems. If you suspect malware, run a complete antivirus scan immediately. Ensure your antivirus is up-to-date and active in real-time protection. If the malware is stubborn, boot your system into Safe Mode and run the scan again.</p>
        <p><strong>Phishing:</strong> Phishing is when cybercriminals impersonate legitimate institutions to steal sensitive information like passwords and credit card numbers. Always check the sender’s email address and be cautious of links in unsolicited emails. Hover over links to preview URLs and avoid clicking on anything suspicious. If you’ve been a victim of phishing, change your passwords immediately and enable Two-Factor Authentication (2FA) wherever possible.</p>
        <p><strong>Ransomware:</strong> Ransomware is a form of malware that locks your files or entire system and demands payment to unlock them. If you're infected, immediately disconnect from the internet and contact your IT support or cybersecurity professional. Avoid paying the ransom as it encourages the attackers, and there's no guarantee your files will be unlocked. Instead, restore your data from a backup if available.</p>
        <p><strong>Scams:</strong> Cyber scams can involve fraudulent schemes where attackers trick you into giving up personal information or making payments. Scams may take the form of fake job offers, lottery winnings, or tech support calls. Always verify offers through trusted channels, and never share sensitive information unless you are sure of the recipient’s legitimacy. If you receive a suspicious call or email, report it to relevant authorities.</p>
        <p><strong>Software Vulnerabilities:</strong> Some cyber-attacks exploit vulnerabilities in outdated or unpatched software. Always ensure your operating system, browsers, and applications are updated regularly. Enable automatic updates where possible and avoid using unsupported or obsolete software, as these are easy targets for hackers.</p>
      </div>

      {/* Section 2: Live Help / Helpline Info */}
      <div className="alert-card">
        <h3>📞 Live Help / Helpline Info</h3>
        <p>If you’re facing an immediate cybercrime issue, help is available. In India, the <strong>National Cyber Crime Helpline</strong> is <strong>1930</strong>, which is available 24/7. Whether you're dealing with cyberbullying, fraud, or identity theft, you can report the issue to the helpline. The helpline is equipped to guide individuals through reporting procedures, mitigate damage, and offer advice on dealing with the situation.</p>
        <p>The <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer"><strong>Cyber Crime Portal</strong></a> is the official government platform for reporting various online crimes such as online financial fraud, identity theft, and more. This portal is an essential resource for individuals who wish to formally report a cybercrime, and it provides guidance on filing a complaint, the steps that follow, and possible outcomes.</p>
        <p>For more detailed or organization-specific issues, many companies and institutions also offer cybersecurity support and helplines. If you are part of an organization, you may want to consult your internal IT or security team for guidance or use their incident response plan for handling cyber incidents. These teams can assist you in identifying and mitigating cyber threats in your environment.</p>
        <p>For international incidents, consider contacting the <strong>Interpol Cybercrime Division</strong>, or your local law enforcement agency. Many countries have national cybersecurity frameworks that work together to combat global cybercrime.</p>
        <p>Lastly, there are non-governmental organizations that specialize in supporting victims of cybercrime, providing free advice, and offering services like counseling or legal help for affected individuals. Websites like <a href="https://www.stopcyberbullying.org/" target="_blank" rel="noopener noreferrer">Stop Cyberbullying</a> or <a href="https://www.identitytheft.gov/" target="_blank" rel="noopener noreferrer">IdentityTheft.gov</a> provide excellent resources for individuals looking for help.</p>
      </div>

      {/* Section 3: Security Checkup Tool */}
      <div className="alert-card">
        <h3>✅ Security Checkup Tool</h3>
        <p>Performing regular security checkups on your system and online accounts is one of the best ways to stay safe from cyber threats. A simple self-assessment can often reveal weak points in your security. Below are the key aspects you should evaluate during your checkup:</p>
        <p><strong>1. Two-Factor Authentication (2FA):</strong> Ensure that all your critical accounts such as email, bank accounts, and social media platforms have Two-Factor Authentication (2FA) enabled. This adds an extra layer of security by requiring you to verify your identity through a second device or method (e.g., a code sent to your phone).</p>
        <p><strong>2. System and Application Updates:</strong> Regularly update your operating system and applications. Cybercriminals exploit unpatched vulnerabilities in outdated software to launch attacks. Automatic updates should be turned on whenever possible to keep your system up to date with the latest security patches.</p>
        <p><strong>3. Backup Your Data:</strong> Regular backups ensure that even if your data is compromised or lost, you can recover it. Backups should be performed regularly and stored securely, either in an offline device or a trusted cloud storage service. Never rely on just one backup method.</p>
        <p><strong>4. Strong Passwords:</strong> Use long, complex, and unique passwords for each account. Avoid reusing passwords across multiple sites. Consider using a password manager to securely store and generate strong passwords. Enable a password recovery option to ensure you can regain access if needed.</p>
        <p><strong>5. Antivirus and Malware Protection:</strong> Ensure that your antivirus software is up to date and actively running on your system. It will help protect against known malware and viruses. Consider using a malware detection tool or a firewall for added protection. Perform regular scans for hidden malware or unwanted programs.</p>
      </div>

      {/* Section 4: Report a Security Issue */}
      <div className="alert-card">
        <h3>📂 Report a Security Issue</h3>
        <p>If you have encountered a security issue, whether it’s a fraud, hacking, phishing, or any form of online crime, you must report it immediately. Reporting cybercrime not only helps you, but it also contributes to fighting cyber threats on a larger scale.</p>
        <p><strong>Step 1:</strong> Collect evidence such as screenshots, emails, transaction history, or any form of communication related to the security issue. This will be necessary for investigations and authorities to follow up on your case.</p>
        <p><strong>Step 2:</strong> Go to the <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">Indian Cyber Crime Portal</a> and submit your complaint. Ensure you provide accurate and detailed information regarding the nature of the issue.</p>
        <p><strong>Step 3:</strong> If you're in urgent need, use the <strong>National Cyber Crime Helpline (1930)</strong> to get immediate assistance. The helpline can guide you on what to do next and how to protect yourself from further harm.</p>
        <p><strong>Step 4:</strong> You can also contact your local law enforcement authorities for crimes such as harassment or extortion. Police stations can work with cybercrime units to pursue your case and assist in investigations.</p>
        <p><strong>Step 5:</strong> Many private organizations, financial institutions, and service providers also have internal incident-reporting mechanisms. Always check with your service provider for additional resources or steps to take, particularly when it involves a financial transaction.</p>
      </div>

      {/* Section 5: Guides & Resources */}
      <div className="alert-card">
        <h3>📚 Guides & Resources</h3>
        <p>There is a wealth of information available online to improve your cybersecurity skills. Below are curated links to useful resources and guides that will help you stay safe online:</p>
        <ul>
          <li><a href="https://www.cert-in.org.in/" target="_blank" rel="noopener noreferrer"><strong>CERT-In Official Site</strong></a> – India’s Computer Emergency Response Team provides alerts, advisories, and resources for cybersecurity best practices.</li>
          <li><a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer"><strong>OWASP Top 10</strong></a> – A list of the ten most critical web application security risks, helping developers understand where their applications may be vulnerable.</li>
          <li><a href="https://staysafeonline.org/" target="_blank" rel="noopener noreferrer"><strong>StaySafeOnline</strong></a> – A comprehensive resource for online safety, offering tips on how to protect personal information and avoid scams.</li>
          <li><a href="https://safety.google/" target="_blank" rel="noopener noreferrer"><strong>Google Safety Center</strong></a> – Google’s official site with best practices for securing Google accounts, devices, and personal data.</li>
          <li><a href="https://www.microsoft.com/en-us/safety/" target="_blank" rel="noopener noreferrer"><strong>Microsoft Security Hub</strong></a> – Resources for PC and personal security, with tips on how to protect yourself against malware and other online threats.</li>
        </ul>
      </div>
    </div>
  );
}

export default Support;
