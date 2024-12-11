import React from 'react';
import './App.css';
import Utsläppstabell from './Utsläppstabell'; // För CO2-utsläpp
import TemperatureChart from './TemperatureChart'; // För globala temperaturförändringar
import GlacierChart from './GlacierChart'; // För glaciärstorlek
import SeaLevelChart from './SeaLevelChart'; // För havsnivåhöjningar


const FaktaOm = () => {
  return (


    <div className="fakta-om">
      {/* Hero-sektionen */}
      <header className="hero">
        <div className="overlay"></div>
        <img
          src="https://images.pexels.com/photos/18569964/pexels-photo-18569964/free-photo-of-natur-skog-trad-host.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Fakta och statistik om klimatförändringar</h1>
          <p>Utforska statistik och lär dig mer om vår planet.</p>
        </div>
      </header>

      {/* Innehåll */}
      <div className="stats">
        {/* CO2-utsläpp */}
        <section >
          <Utsläppstabell />
          <p>
            Här ser du hur utsläppen av koldioxid har ökat sedan industrialiseringen och varför det är en nyckelfaktor i klimatförändringarna.
          </p>
        </section>

        {/* Glaciärstorlek */}
        <section>
         <GlacierChart />
          <p>
            Grafen visar hur glaciärernas genomsnittliga storlek har minskat de senaste decennierna på grund av den globala uppvärmningen.
          </p>
        </section>

        {/* Havsnivåhöjningar */}
        <section>
        <SeaLevelChart />
          <p>
            Visualisering av hur havsnivån har stigit globalt över tid och vilka konsekvenser detta har.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FaktaOm;
