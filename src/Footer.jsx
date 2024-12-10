import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Byt ut mot rätt logotyp */}
          <img src="./klimatvanner_svart.png" alt="klimatvanner_logo" className="footer-logo-img" />
        </div>
        <div className="footer-links">
          <h4>Kontakt</h4>
          <ul>
            <li><a href="/klimatnyheter">Klimatnyheter</a></li>
            <li><a href="/fakta-om">Fakta om koldioxidutsläpp</a></li>
            <li><a href="/lär-dig">Lär dig om klimatet</a></li>
          </ul>
        </div>
        <div className="footer-organization">
          <h4>Organisation</h4>
          <ul>
            <li><a href="/kontakta-oss">Kontakta Oss</a></li>
            <li>© Klimatvänner 2024</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
