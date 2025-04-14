import React from "react";

const AwarenessHub = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Awareness and Education Hub</h1>

      {/* Section 1: Case Studies */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Case Studies</h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold">Case Study 1: Malware Attack - WannaCry Ransomware</h3>
            <p>In 2017, the WannaCry ransomware attack spread across the globe, affecting over 200,000 computers in 150 countries. The ransomware exploited a vulnerability in Windows operating systems and encrypted users' data, demanding payment in Bitcoin for the decryption key. The attack mainly targeted systems that hadn't installed critical patches issued by Microsoft. This incident highlighted the importance of timely software updates and secure data backup practices.</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Regularly update operating systems and software to protect against known vulnerabilities.</li>
              <li>Maintain robust backups of important data to mitigate the impact of a ransomware attack.</li>
              <li>Educate employees and individuals about phishing attacks and how they can unknowingly trigger malware infections.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Case Study 2: Phishing Attack - The Google and Facebook Scam</h3>
            <p>Between 2013 and 2015, two major tech companies, Google and Facebook, were victims of a large-scale phishing attack. The attacker impersonated a trusted supplier, tricking the companies into wiring over $100 million in total. The attack occurred over several years, where the fraudster created fake invoices and sent them to the companies' finance departments.</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Always verify the identity of vendors and partners, especially in financial transactions.</li>
              <li>Implement multi-step verification for high-value transactions to prevent fraud.</li>
              <li>Provide training on how to recognize phishing emails and scams to employees.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Case Study 3: Data Breach - Equifax</h3>
            <p>In 2017, Equifax, one of the largest credit reporting agencies, suffered a massive data breach that exposed the personal data of over 143 million Americans. The breach was caused by a failure to patch a known vulnerability in Apache Struts, a widely used web application framework. The attackers exploited this vulnerability to gain access to sensitive information like Social Security numbers, birth dates, and addresses.</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Regularly update and patch software systems to reduce the risk of vulnerabilities being exploited.</li>
              <li>Encrypt sensitive data to ensure that even in the event of a breach, the information remains protected.</li>
              <li>Provide individuals with resources to protect themselves after a data breach, such as credit monitoring services and identity theft protection.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Case Study 4: Insider Threat - Edward Snowden</h3>
            <p>Edward Snowden, a former contractor for the National Security Agency (NSA), is perhaps the most famous example of an insider threat. In 2013, Snowden leaked classified documents that revealed extensive global surveillance programs. While Snowden argued that his actions were justified for the public good, the incident raised concerns about data protection, surveillance, and the abuse of power within organizations.</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Ensure robust access controls and monitoring mechanisms to detect unusual internal activities.</li>
              <li>Implement strong non-disclosure agreements (NDAs) and regular audits for employees handling sensitive data.</li>
              <li>Educate employees about the consequences of leaking confidential information.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Law and Order */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Law and Order in Cybercrime (Real-World Cases)</h2>

        <p>
          Cybercrime is no longer an abstract concept but a real and pressing threat. Law enforcement agencies around the world are now actively tackling cybercrimes through various means, including international cooperation, advanced cybersecurity technologies, and legal frameworks. Below are some notable cases of cybercrimes and how law enforcement responded:
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><strong>The Silk Road Case (Dark Web Marketplace):</strong> In 2013, the FBI took down the website, and its founder, Ross Ulbricht, was arrested and later sentenced to life in prison. This case highlights the importance of international cooperation between law enforcement agencies to dismantle dark web operations.</li>
          <li><strong>The 2017 WannaCry Ransomware Attack:</strong> Law enforcement agencies and cybersecurity firms worked together to track down the source of the attack and stop its spread.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">2.1 How to Tackle Being a Cyber Victim</h3>

        <ul className="list-disc ml-6 mt-2 space-y-4">
          <li>
            <strong>Ransomware Attack:</strong>
            <ul className="list-disc ml-6">
              <li>Disconnect your device from the network to prevent the malware from spreading.</li>
              <li>Do not pay the ransom — paying doesn't guarantee you will get your files back.</li>
              <li>Use reputable decryption tools or restore from backups.</li>
              <li>Report the incident to local law enforcement.</li>
            </ul>
          </li>
          <li>
            <strong>Phishing Attack:</strong>
            <ul className="list-disc ml-6">
              <li>Change your passwords immediately, especially for financial or sensitive accounts.</li>
              <li>Check your bank statements for unauthorized transactions.</li>
              <li>Notify your contacts if the phishing email was sent from your account.</li>
              <li>Report the phishing attempt to the relevant authorities.</li>
            </ul>
          </li>
          <li>
            <strong>Data Breach:</strong>
            <ul className="list-disc ml-6">
              <li>Monitor your accounts for suspicious activity.</li>
              <li>Freeze your credit with the major credit bureaus.</li>
              <li>Use identity theft protection services, if available.</li>
            </ul>
          </li>
          <li>
            <strong>Social Engineering Attacks:</strong>
            <ul className="list-disc ml-6">
              <li>Alert your employer or organization if you are targeted at work.</li>
              <li>Verify any suspicious requests before taking action.</li>
              <li>Be cautious of unsolicited phone calls, emails, or messages asking for personal information.</li>
            </ul>
          </li>
        </ul>
      </section>
            {/* Section 3: Security Tools */}
            <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Security Tools</h2>
        <p>Here are some essential security tools and services to help users safeguard their devices and data:</p>

        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><strong>Antivirus Software:</strong> Protects against malware, viruses, ransomware, and spyware (e.g., Norton, Bitdefender, McAfee).</li>
          <li><strong>Firewall:</strong> Helps block unauthorized access to a computer or network (e.g., ZoneAlarm, Windows Firewall).</li>
          <li><strong>VPNs (Virtual Private Networks):</strong> Encrypt internet traffic to maintain online privacy and anonymity (e.g., NordVPN, ExpressVPN, ProtonVPN).</li>
          <li><strong>Password Managers:</strong> Securely store and generate strong passwords (e.g., LastPass, Dashlane, Bitwarden).</li>
          <li><strong>Encryption Tools:</strong> Encrypt sensitive data to protect it from unauthorized access (e.g., VeraCrypt, AxCrypt).</li>
          <li><strong>Two-Factor Authentication (2FA) Apps:</strong> Adds an extra layer of security for account logins (e.g., Google Authenticator, Authy, Microsoft Authenticator).</li>
        </ul>
      </section>

      {/* Section 4: Software Recommendations */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Software Recommendations</h2>
        <p>Recommended cybersecurity software for users at different levels of expertise:</p>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Beginner:</h3>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Antivirus:</strong> Avast Free Antivirus, AVG</li>
            <li><strong>Password Manager:</strong> LastPass</li>
            <li><strong>VPN:</strong> TunnelBear (easy to use)</li>
            <li><strong>Browser Extensions:</strong> HTTPS Everywhere, uBlock Origin</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Intermediate:</h3>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Antivirus:</strong> Bitdefender, Kaspersky</li>
            <li><strong>Password Manager:</strong> Bitwarden</li>
            <li><strong>VPN:</strong> NordVPN, ProtonVPN</li>
            <li><strong>Secure Email:</strong> ProtonMail</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-semibold">Advanced:</h3>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Encryption:</strong> VeraCrypt for disk encryption</li>
            <li><strong>Operating System:</strong> Qubes OS, Tails for anonymity</li>
            <li><strong>Network Monitoring:</strong> Wireshark, Snort</li>
            <li><strong>Anonymous Browsing:</strong> Tor Browser</li>
          </ul>
        </div>
      </section>

      {/* Section 5: Guides and Resources */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Guides and Resources</h2>
        <p>Educational materials and step-by-step guides to help users protect themselves online:</p>

        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li><strong>How to Create Strong Passwords:</strong> Use a combination of uppercase, lowercase, numbers, and symbols. Avoid using personal info like names or birthdays. Use a password manager to generate and store them.</li>
          <li><strong>How to Recognize Phishing Emails:</strong> Check for spelling errors, unusual sender addresses, and urgent language. Don’t click on suspicious links. Hover over links to preview the URL.</li>
          <li><strong>How to Secure Your Social Media Accounts:</strong> Enable 2FA, review privacy settings, don’t overshare personal info, and be cautious of friend requests from strangers.</li>
          <li><strong>Steps to Take After a Data Breach:</strong> Change passwords immediately, enable 2FA, monitor financial accounts, and consider freezing your credit.</li>
          <li><strong>Safe Browsing Tips:</strong> Use secure websites (HTTPS), avoid clicking on pop-ups or ads, and keep your browser updated.</li>
        </ul>

        <div className="mt-6">
          <p>Stay updated with the latest in cybersecurity by following:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><a href="https://www.krebsonsecurity.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Krebs on Security</a></li>
            <li><a href="https://www.cybersecuritydive.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Cybersecurity Dive</a></li>
            <li><a href="https://www.cisa.gov" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">CISA (Cybersecurity and Infrastructure Security Agency)</a></li>
            <li><a href="https://www.bleepingcomputer.com" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Bleeping Computer</a></li>
          </ul>
        </div>
      </section>



    </div>
  );
};

export default AwarenessHub;
