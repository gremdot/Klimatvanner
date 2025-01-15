import React from 'react';
import './App.css';

const LärDig = () => {
  /*Funktionen LärDig renderar en header, där en bild visas, med tillhörande text (h1 och p).
  Dessa stylas med hjälp av olika css-klasser (overlay: gör bilden mörkare, hero: centrerar text
  och gör att bilden har 100% width, hero-text: placerar texten ovanpå bilden, hero-image: bestämmer 
  höjden på bilden) */ 

  return (
          <div>
    {/* Hero-sektionen */}
    <header className="hero">
    <div className="overlay"></div>
      <img src="./pant.png" alt="ett hav av pant" className="hero-image"/>
      {/*Bildkälla, pexels, gratis: https://www.pexels.com/sv-se/foto/802221/ */}
      <div className="hero-text">
        <h1>Rädda planeten - <br/> var med och gör skillnad!</h1>
        <p> Vår planet mår dåligt och behöver din hjälp! Det kan kännas hopplöst att läsa om 
            översvämmade städer och utrotningshotade djur, men du kan faktiskt göra skillnad. 
            Läs mer om hur du kan hjälpa planeten redan idag! 
        </p>
      </div>
    </header>

      {/* Nedan följer 3 ämnen om hur ungdomarna kan påverka. Ett sådant stycke innehåller
      en bild, en paragraf med text och en h3 rubrik. Klassen lär-dig omfamnar alla textstycken 
      och gör att de får whitespace runtomkring sig efter som klassen har width: 1200px. Även topic 
      används i alla textstycken som justerar avståndet mellan stycken samt deras position*/}
      <div className="lär-dig">
        <div className="topic">


        </div>
        <div className="topic">
          <img src="./sortering.jpg" alt="Återvinning" />
          {/*Bildkälla, pixabay, gratis: https://pixabay.com/sv/photos/%C3%A5tervinna-egypten-elefantin%C3%B6-resort-237874/*/}
          <div >
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
          <img src="./tvättlina.jpg" alt="handla miljövänligt" />
          {/*Bildkälla, pixabay, gratis: https://pixabay.com/photos/laundry-dry-hang-clothesline-963150/*/}
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
          <img src="./lax.jpg" alt="matsvinn" />
          {/*Bildkälla, pixabay, gratis: https://pixabay.com/photos/new-years-eve-salmon-fish-seafood-518032/*/}
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

{/* hr linje, grön. Gör så att det blir en avdelning mellan de två avsnitten. 
Har en klass som heter hr */}
<hr class="hr"/>

      {/* Nedan visas en sektion med texter (h2 och p) om vart man kan läsa vidare om klimatet. 
      Även länkar till andra webbplatser finns med
      klassen centreradtext centrerar texten i paragrafen, learn-more fixar färgen på länkarna,
      att dem är centrerade osv. */}
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

/* den sista }; knyter ihop funktionen och export default exporterar komponenten LärDig */
export default LärDig;
