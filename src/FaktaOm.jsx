import React from 'react';
import './App.css';
import Utsläppstabell from './Utsläppstabell'; // För CO2-utsläpp
import TemperatureChart from './TemperatureChart'; // För globala temperaturförändringar
import GlacierChart from './GlacierChart'; // För glaciärstorlek
import SeaLevelChart from './SeaLevelChart'; // För havsnivåhöjningar


const FaktaOm = () => {
  return (


    <div>
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
      <div class="lär-dig">
        {/* CO2-utsläpp */}
         <section class="support">
          <Utsläppstabell />
          <p>
          Koldioxid, eller CO₂, är en gas som bildas när vi använder fossila bränslen som kol, olja och gas för att få energi. Till exempel när vi kör bil, flyger eller producerar el i fabriker. 
            Det som gör CO₂ så viktigt att prata om är att det är en av de största orsakerna till den globala uppvärmningen. 
            Diagrammet visar hur mycket koldioxid människor har släppt ut redan från industriella revolutionens början på 1800-talet fram tills idag. 
            Ju mer vi släpper ut, desto varmare blir jorden, vilket leder till farliga konsekvenser som smältande isar, höjda havsnivåer och fler extrema väderhändelser.
            Vi kan minska utsläppen genom att använda förnybar energi som sol- och vindkraft, åka kollektivt och minska vårt användande av plast.
          </p>
        </section>
<br/>
        {/* Glaciärstorlek */}
      <section class="support">
         <GlacierChart />
          <p>
          Glaciärer är enorma ismassor som finns i bergskedjor och vid polerna. De fungerar som naturens kylskåp eftersom de hjälper till att hålla jorden sval. 
            Men när temperaturen på jorden ökar, börjar glaciärerna smälta. Diagrammet visar hur glaciärernas storlek har minskat drastiskt under de senaste decennierna. 
            När glaciärerna smälter, rinner isvattnet ut i havet, vilket gör att havsnivån stiger. 
            Detta påverkar både djur och människor. Djur som isbjörnar och sälar förlorar sina livsmiljöer, och människor som bor nära kusterna riskerar att få sina hem översvämmade.
            För att stoppa detta behöver vi minska våra utsläpp och skydda våra isar innan det är för sent.
          </p>
        </section>

<br/>
        {/* Havsnivåhöjningar */}
        <section class="support">
        <SeaLevelChart />
          <p>
          Havsnivån stiger när isarna smälter och när havsvattnet värms upp, eftersom varmt vatten tar mer plats än kallt. 
            Diagrammet visar hur havsnivån har stigit från och med 1800-talet och framåt.  
            När havsnivån höjs kan det orsaka stora problem. Till exempel kan städer och byar nära havet översvämmas, vilket gör att människor måste flytta. 
            Även ekosystem som mangroveskogar och korallrev förstörs, vilket påverkar både djur och människor som är beroende av dessa miljöer. 
            Vi kan hjälpa till att bromsa havsnivåhöjningarna genom att minska våra utsläpp, skydda kustområden och använda naturbaserade lösningar som att återplantera mangroveskogar.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FaktaOm;
