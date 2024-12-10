import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Navigationskomponent
import Startsida from './Startsida';
import Klimatnyheter from './Klimatnyheter';
import LärDig from './LärDig';
import FaktaOm from './FaktaOm';
import KontaktaOss from './KontaktaOss';
import Footer from './Footer'; //Får inte denna att funka

const App = () => {
  return (
    <div>
      {/* Navigationsfält */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Startsida />} />
        <Route path="/klimatnyheter" element={<Klimatnyheter />} />
        <Route path="/lär-dig" element={<LärDig />} />
        <Route path="/fakta-om" element={<FaktaOm />} />
        <Route path="/kontakta-oss" element={<KontaktaOss />} />
      </Routes>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
