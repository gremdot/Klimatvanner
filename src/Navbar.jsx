import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"; 

const Navbar = () => {
  return (
    <nav class="navigation">
      <ul>
        <li>
          <a href="/">
          <img class="logga" src="./klimatvanner_svart.png" alt="klimatvänner_logo" />
          </a>
        </li>
        <li><Link to="/">Startsida</Link></li>
        <li><Link to="/klimatnyheter">Klimatnyheter</Link></li>
        <li><Link to="/fakta-om">Fakta om koldioxidutsläpp</Link></li>
        <li><Link to="/lär-dig">Var med och påverka!</Link></li>
        <li><Link to="/kontakta-oss">Kontakta oss</Link></li>
      </ul>
      {/*Navbar av <nav> som består av en <ul> (unordered list) med 5 <li> (list item). Var <li> har en en React <Link>, denna istället för en <a> (anchor element) då React <Link> använder sig av client-side routing och det förbättrar prestandan webbplatsen. Det är generellt bättre för intern navigering.*/}
    </nav>
  );
};

export default Navbar;
