import React from 'react';
import './Footer.css';

const Footer = () => {
  return (

    <footer>
       <img
      src="grass.png"
      alt="Hero"
      className="gräs"
    />
      <div className="footer"> 
        <section>
        <div className="footer-container">
          <div className="footer-logo">
            <a href="/">
            <img src="./klimatvanner_svart.png" alt="logo"/>
            </a>
          </div>
          </div>
          <div className="footer-links">
            <div className="footer-container">
            <h4>Klimatet</h4> 
            <ul>
              <li><a href="/Klimatnyheter">Klimatnyheter</a></li>
              <li><a href="/Fakta-om">Fakta om koldioxidutsläpp</a></li>
              <li><a href="/Lär-dig">Lär dig om klimatet</a></li>
              </ul>
            </div>
            <div className="footer-container">
            <h4>Organisation</h4>
            <ul>
              <li><a href="/Kontakta-oss">Kontakta Oss</a></li>
              <li className="copyright">©2024 Klimatvänner. All rights reserved.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/*Footer består av tre div med samma klass "footer-container". Den första består av en <img> av klimatvänners logo inuti <a> som leder till startsidan. De sista två har en egen <h4> rubrik och en <ul> (unordered list) med flera <li> (list item). Var <li> har en <a> (anchor element) som länkar till olika delar av webbplatsen. Denna Footer komponent används i App.jsx och inte individuellt på sidorna så den är alltid detsamma och finns på varje sida. */}
    </footer>
  );
};

export default Footer;