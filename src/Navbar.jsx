import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css"; 

const Navbar = () => {
  return (
    <nav class="navigation">
      <ul>
        <li>
        <img class="logga" src="https://cdn.discordapp.com/attachments/1305912001465417844/1314532859083489332/klimatvanner_svart.png?ex=67581220&is=6756c0a0&hm=7b955977fc77ae6bf1c3b7aae76282597e6ef4c820d2ce0fa95db4d6da5e3e0b&" alt="klimatvänner" />
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
