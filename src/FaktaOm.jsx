import React from 'react';
import './App.css';
import Utsläppstabell from './Utsläppstabell'; 
import Glaciärtabell from './Glaciärtabell'; 
import Havsnivåtabell from './Havsnivåtabell'; 


const FaktaOm = () => {
  return (
    <div>
      {/* Hero sektion som innehåller en header, titel och undertitel */}
      <header className="hero">
        <div className="overlay"></div>
        <img src="./bjork_skog.jpeg" alt="Björk skog" className="hero-image"/>
        <div className="hero-text">
          <h1>Fakta och statistik om klimatförändringar</h1>
          <p>Utforska statistik och lär dig mer om vår planet.</p>
        </div>
      </header>

      {/* Innehåll */}
      <div class="lär-dig">
        {/* CO2-utsläpp */}
         <section class="tables">
          {/* Funktion som hämtar exporteringen ur tabell komponent */}
          <Utsläppstabell />
          {/* Sektion som innehåller titel, paragrafer och undertitlar */}
          <h3 id="kol-h3">Koldioxid eller CO₂</h3>
          <p>Är en gas som bildas när vi använder fossila bränslen som kol, olja och gas för att få energi. CO₂ bildas när vi till exempel kör bil, flyger eller producerar el i fabriker. Det som gör CO₂ så viktigt att prata om är att det är en av de största orsakerna till den globala uppvärmningen! 
          <br /><br />
          Diagrammet ovan visar hur mycket koldioxid människor har släppt ut redan från industriella revolutionens början på 1800-talet fram tills idag. </p>
          <h4>Konsekvenser</h4>
          <p>Ju mer vi släpper ut, desto varmare blir jorden, vilket leder till farliga konsekvenser som smältande glaciärer som höjer havsnivåerna och andra extrema väderhändelser.</p>
          <h4>Förebyggande åtgärder</h4>
          <p>Vi kan minska utsläppen genom att använda förnybar energi som sol- och vindkraft, åka kollektivt och minska vårt användande av plast.</p>
        </section>

        {/* Glaciärstorlek */}
      <section class="tables">
        {/* Funktion som hämtar exporteringen ur tabell komponent*/}
         <Glaciärtabell />
         {/* Sektion som innehåller titel, paragrafer och undertitlar */}
         <h3 id="glac-h3">Glaciärer</h3>
         <p>Är enorma ismassor som finns i bergskedjor och vid polerna. De fungerar som naturens kylskåp eftersom de hjälper till att hålla jorden sval. Men när temperaturen på jorden ökar, börjar glaciärerna smälta.
         <br /><br />Diagrammet ovan visar hur glaciärernas storlek har minskat drastiskt under de senaste decennierna. </p>
         <h4>Konsekvenser</h4>
         <p>När glaciärerna smälter, rinner isen och vattnet ut i havet. Vilket höjer havsnivåerna. Detta påverkar både djur och människor. Djur som isbjörnar och sälar förlorar sina livsmiljöer, och människor som bor nära kusterna riskerar att få sina hem översvämmade. </p>
         <h4>Förebyggande åtgärder</h4>
         <p>För att stoppa detta behöver vi minska våra utsläpp och skydda våra glaciärer innan det är för sent.</p>
        </section>

        {/* Havsnivåhöjningar */}
        <section class="tables">
          {/* Funktion som hämtar exporteringen ur tabell komponent*/}
        <Havsnivåtabell />
        {/* Sektion som innehåller titel, paragrafer och undertitlar */}
        <h3 id="sea-h3">Havsnivån</h3>
        <p>Är jordens basnivå som används för att mäta höjd och djup. Havsnivåhöjningar sker när isarna smälter och när havsvattnet värms upp, eftersom varmt vatten tar mer plats än kallt vatten. 
        <br /><br />Diagrammet ovan visar hur havsnivån har stigit från och med 1800-talet och framåt. </p>
        <h4>Konsekvenser</h4>
        <p>När havsnivån höjs kan det orsaka stora problem. Till exempel kan städer och byar nära havet översvämmas, vilket gör att människor måste fly. Även ekosystem som mangroveskogar och korallrev förstörs, vilket påverkar både djur och människor som är beroende av dessa miljöer. </p>
        <h4>Förebyggande åtgärder</h4>
        <p>Vi kan hjälpa till att bromsa havsnivåhöjningarna genom att minska våra utsläpp, skydda kustområden och använda naturbaserade lösningar som att återplantera mangroveskogar vars rötter stoppar översvämningar. </p>
        </section>
      </div>
    </div>
  );
};

export default FaktaOm;
