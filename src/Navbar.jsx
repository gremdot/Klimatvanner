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
        <li><Link to="/fakta-om">Fakta om koldioxidutsläpp</Link></li>
        <li><Link to="/lär-dig">Var med och påverka!</Link></li>
        <li><Link to="/kontakta-oss">Kontakta oss</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
