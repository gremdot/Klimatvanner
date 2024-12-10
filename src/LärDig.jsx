import React from 'react';
import './App.css';

const LärDig = () => {
  return (
    <div className="lär-dig">
      <h1></h1>

      {/* Befintligt innehåll */}
      <div className="topics">
        <div className="topic">
          <div>
            <h2 class="centreradtext">Rädda planeten - var med och gör skillnad!</h2>
            <p class="centreradtext">
            Vår planet mår dåligt och behöver din hjälp! Det kan kännas hopplöst att läsa om 
            översvämmade städer och utrotningshotade djur, men du kan faktiskt göra skillnad. 
            Istället för att stå vid sidan och titta på, kan du ta små steg som gör stor påverkan. 
            Panta den där energidrycksburken eller ta hand om resterna från gårdagens middag – valet är ditt. 
            Glöm inte att det är de små handlingarna som tillsammans skapar stora förändringar!
            </p>
          </div>

        </div>
        <div className="topic">
          <img src="https://via.placeholder.com/150x100" alt="Återvinning" />
          <div>
            <h3>Återvinning och pant</h3>
            <p>
            Att återvinna och panta sparar energi – och det är dessutom enkelt! Hur många gånger har du druckit ur en 
            PET-flaska eller en pantburk? Troligen ganska många gånger. Genom att panta får du inte bara tillbaka en 
            eller två kronor, utan du bidrar också till att spara energi. Visste du att energin som sparas när du pantar 
            en enda burk räcker till att streama musik i hela 14 timmar? Helt galet, eller hur?
            </p>
          </div>
        </div>
        <div className="topic">
          <img src="https://via.placeholder.com/150x100" alt="handla miljövänligt" />
          <div>
            <h3>Handla miljövänligt</h3>
            <p>
            Visste du att dina köpvanor har stor påverkan på miljön? Att välja second hand eller 
            miljövänliga alternativ är ett enkelt sätt att bidra till en mer hållbar framtid. 
            Genom att handla second hand ger du nytt liv till saker som redan finns, vilket sparar 
            resurser och minskar avfallet. Dessutom kan du hitta unika fynd som ingen annan har!
            </p>
          </div>
        </div>
        <div className="topic">
          <img src="https://via.placeholder.com/150x100" alt="Diet" />
          <div>
            <h3>Minska matsvinnet</h3>
            <p>
            Varje år slängs enorma mängder fullt ätbar mat, vilket påverkar både miljön och din ekonomi. 
            Visste du att maten som hamnar i soporna ofta har krävt stora mängder energi, vatten och resurser 
            för att produceras? Genom att minska matsvinnet gör du inte bara miljön en tjänst, utan du sparar 
            även pengar och får ut mer av det du redan har hemma. 
            </p>
          </div>
        </div>
      </div>

      {/* Befintligt innehåll - länkar */}
      <section className="learn-more">
        <h2>Vill du lära dig mer om klimatet och hur du kan påverka? </h2>
        <p class="centreradtext">
        Länkarna leder till andra miljövänliga webbplatser!
        </p>
        <ul>
          <li><a href="https://www.wwf.se/">WWF</a></li>
          <li><a href="https://www.iucnredlist.org/">IUCN Red List</a></li>
          <li><a href="https://www.naturskyddsforeningen.se/">Naturskyddsföreningen</a></li>
          <li><a href="https://www.naturvardsverket.se/">Naturvårdsverket</a></li>
          <li><a href="https://europa.eu/">Europeiska unionen</a></li>
          <li><a href="https://www.greenpeace.org/">Greenpeace</a></li>
          <li><a href="https://www.folkhalsomyndigheten.se/">Folkhälsomyndigheten</a></li>
        </ul>
      </section>
    </div>
  );
};

export default LärDig;
