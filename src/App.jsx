import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Navigationskomponent för att hantera sidans meny
import Startsida from './Startsida'; //Komponenten för "startsidan"
import Klimatnyheter from './Klimatnyheter'; //Komponenten för "klimatnyheter" sidan
import LärDig from './LärDig'; // Komponenten för "var med och påverka!" sidan 
import FaktaOm from './FaktaOm'; //Komponenten för sidan med fakta och statestik från JSON datan
import KontaktaOss from './KontaktaOss'; //Komponent för sidan "kontakta oss"
import Footer from './Footer'; //Komponenten för Footer

/*
* App.jsx är rotkomponenten för vår applikation.
* I App.jsx ligger navigationsfältet (Navbar) och olika routes (Routes) för att kunna växla mellan de olika sidorna
  som finns i applikationen. 
* I App.jsx finns även footern som visas på alla sidor.
*/ 

const App = () => {
  return (
    <div>
      {/* Navigationsfält som visas högst upp på alla sidor */}
      <Navbar />

      {/* I Routes så bestäms det vilken sida (komponent) som ska visas beroende på vilken url användaren har i webbläsaren. Det gör att när man klickar på de olika
          ettiketterna i navigationen så kommer man till den sidan i applikationen.
       */}
      <Routes>
        <Route path="/" element={<Startsida />} />
        <Route path="/klimatnyheter" element={<Klimatnyheter />} />
        <Route path="/lär-dig" element={<LärDig />} />
        <Route path="/fakta-om" element={<FaktaOm />} />
        <Route path="/kontakta-oss" element={<KontaktaOss />} />
      </Routes>
      
      {/* Footer är en sidfot som visas längst ner på alla sidor */}
      <Footer />
    </div>
  );
};

export default App;
