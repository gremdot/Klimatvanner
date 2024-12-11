import React from 'react';
import './App.css'; // CSS-filen för styling
import EmissionsTable from './data/CO2_emissions.json'; 
import Utsläppstabell from './Utsläppstabell'; // Kontrollera att sökvägen är korrekt


const FaktaOm = () => {
  return (
    <div className="startsida">
    {/* Hero-sektionen */}
    <header className="hero">
    <div className="overlay"></div>
      <img
                src="https://images.pexels.com/photos/18569964/pexels-photo-18569964/free-photo-of-natur-skog-trad-host.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Byt ut mot din bild-URL
        alt="Hero"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>Fakta och statistik om koldioxidutsläpp</h1>
        <p>Utforska statistiken och lär dig för att förstå möjliga lösningar!</p>
      </div>
    </header>

      {/* Diagram och text-sektioner */}
      <div className="stats">
        {/* Diagram 1 */}
        <div className="stat-item">
          <img
            src="https://via.placeholder.com/200" // Placeholder för diagram
            alt="Cirkeldiagram"
          />
          <p>
            Mauris malesuada tempus nisl et aliquam. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Duis rhoncus tempus efficitur.
          </p>
        </div>

        {/* Diagram 2 */}
        <div className="stat-item">
          <img
            src="https://via.placeholder.com/200" // Placeholder för diagram
            alt="Linjediagram"
          />
          <p>
            Mauris malesuada tempus nisl et aliquam. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Duis rhoncus tempus efficitur.
          </p>
         
        </div>

        {/* Diagram 3 */}
        <div className="stat-item">
          <img
            src="https://via.placeholder.com/200" // Placeholder för diagram
            alt="Stapeldiagram"
          />
          <p>
            Mauris malesuada tempus nisl et aliquam. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Duis rhoncus tempus efficitur.
          </p>
        </div>
      </div>

      {/* Tabell-sektion */}
      <section className="table-section">
        <h2>Globala CO2 Utsläpp</h2>
        <Utsläppstabell /> {/* Här visas tabellen */}
      </section>
    </div>
  );
};

export default FaktaOm;
