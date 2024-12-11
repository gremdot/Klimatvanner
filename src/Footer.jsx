import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <section>
        <div className="container">
          <div className="footer-logo">
            <img src="./klimatvanner_svart.png" alt="logo"/>
          </div>
          </div>
          <div className="footer-links">
            <div className="container">
            <h4>Klimatet</h4>
            <ul>
              <li><a href="/Klimatnyheter">Klimatnyheter</a></li>
              <li><a href="/Fakta-om">Fakta om koldioxidutsläpp</a></li>
              <li><a href="/Lär-dig">Lär dig om klimatet</a></li>
              </ul>
            </div>
            <div className="container">
            <h4>Organisation</h4>
            <ul>
              <li><a href="/Kontakta-oss">Kontakta Oss</a></li>
              <li className="copyright">©2024 Klimatvänner. All rights reserved.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;