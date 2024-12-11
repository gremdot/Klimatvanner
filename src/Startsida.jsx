import React from 'react';
import './App.css'; // CSS-filen för styling
import Quiz from './Quiz'; // Kontrollera att sökvägen till Quiz-komponenten är korrekt


const Startsida = () => {
  return (
    <div className="startsida">
      {/* Hero-sektionen */}
      <header className="hero">
      <div className="overlay"></div>
        <img
                  src="https://images.pexels.com/photos/4666753/pexels-photo-4666753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Byt ut mot din bild-URL
          alt="Hero"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Klimatvänner</h1>
          <p>Det finns ingen planet B, dags att steppa upp</p>
        </div>
      </header>

      {/* Mission-sektionen */}
      <section className="mission">
        <h2>Klimatvänners Mission</h2>
        <p>
        Klimatvänner finns för dig som vill göra skillnad – och tro oss, det behövs! 
        Vi riktar oss till unga som bryr sig om klimatet och vill bidra till en hållbar framtid.

Vår mission är enkel: att inspirera och stötta unga i att ta små, smarta steg som tillsammans 
gör stor skillnad. Här får du tips, fakta och verktyg för att leva mer klimatsmart, samtidigt som du blir en del av en rörelse som vågar tänka framåt.

Tillsammans skapar vi en grönare framtid. Är du med?
        </p>
        <img
          src="./klimatvanner_svart.png" // Byt ut mot en riktig bild
          alt="Mission logo"
        />
      </section>
      <section className="intro">
        <h2></h2>
        <p></p>
      </section>

      {/* Lägg till Quiz här */}
      <section className="mission">
        <h2>Vill du testa dina klimatkunskaper?</h2>
        <p>Hur mycket koll har du på klimatet och hur vi kan påverka det? 
          Ta vårt snabba quiz och utmana dig själv! Du får både testa vad du redan 
          vet och lära dig något nytt på vägen. Kanske blir du förvånad över hur mycket 
          skillnad små handlingar kan göra!</p>
        <Quiz />
      </section>
      
      {/* Klimatnyheter */}
      <section className="klimatnyheter">
        <h2>Klimatnyheter</h2>
        <div className="nyheter">
          <div className="nyhet">
            <img
              src="./forest_smoke.jpeg"
              alt="Skogsbränder"
            />
            <h3>Skogsbränder i Norden</h3>
            <p>
              Varje år inträffar över 40 000 vegetationsbränder i Sverige. Läs
              mer för att förstå riskerna och hur man kan hjälpa till.
            </p>
            <a href="#">Läs mer</a>
          </div>
          <div className="nyhet">
            <img
              src="https://via.placeholder.com/150x100"
              alt="Översvämningar"
            />
            <h3>Översvämningar i Spanien</h3>
            <p>
              Spanien kämpar mot stora översvämningar. Valencia är hårt drabbat.
              Läs om lösningar och hjälpinsatser.
            </p>
            <a href="#">Läs mer</a>
          </div>
        </div>
        <button className="btn">Läs mer</button>
      </section>
    </div>
  );
};

export default Startsida;
