import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"; 

const Navbar = () => {
  return (
    <nav class="navigation">
      <ul>
        <li>
        <img class="logga" src="./klimatvanner_svart.png" alt="klimatvänner_logo" />
        </li>
        <li><Link to="/">Startsida</Link></li>
        <li><Link to="/klimatnyheter">Klimatnyheter</Link></li>
        <li><Link to="/lär-dig">Lär Dig</Link></li>
        <li><Link to="/fakta-om">Fakta om</Link></li>
        <li><Link to="/kontakta-oss">Kontakta Oss</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
