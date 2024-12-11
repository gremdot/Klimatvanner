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
        <section>
          <h2>Globala CO2-utsläpp</h2>
          <p>
            Här ser du hur utsläppen av koldioxid har ökat sedan industrialiseringen och varför det är en nyckelfaktor i klimatförändringarna.
          </p>
          <Utsläppstabell />
        </section>

        {/* Temperaturförändringar */}
        <section>
          <h2>Globala temperaturförändringar</h2>
          <p>
            Den här grafen visar hur den globala temperaturen har förändrats över tid och jämför olika källor för data.
          </p>
          <TemperatureChart />
        </section>

        {/* Glaciärstorlek */}
        <section>
          <h2>Glaciärstorlekar</h2>
          <p>
            Grafen visar hur glaciärernas genomsnittliga storlek har minskat de senaste decennierna på grund av den globala uppvärmningen.
          </p>
          <GlacierChart />
        </section>

        {/* Havsnivåhöjningar */}
        <section>
          <h2>Havsnivåhöjningar</h2>
          <p>
            Visualisering av hur havsnivån har stigit globalt över tid och vilka konsekvenser detta har.
          </p>
          <SeaLevelChart />
        </section>
      </div>
    </div>
  );
};

export default FaktaOm;
