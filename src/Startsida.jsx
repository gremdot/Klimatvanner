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
        <h2>Klimatvänners' Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut
          nisl felis. Integer lorem risus, faucibus vel rutrum in, maximus
          facilisis lorem.
        </p>
        <img
          src="https://via.placeholder.com/200x100" // Byt ut mot en riktig bild
          alt="Mission logo"
        />
      </section>
      <section className="intro">
        <h2>Välkommen till Klimatvänner</h2>
        <p>Här kan du lära dig mer om klimatförändringar och hur du kan göra skillnad.</p>
      </section>

      {/* Lägg till Quiz här */}
      <section className="quiz-section">
        <h2>Testa dina kunskaper</h2>
        <Quiz />
      </section>
      
      {/* Klimatnyheter */}
      <section className="klimatnyheter">
        <h2>Klimatnyheter</h2>
        <div className="nyheter">
          <div className="nyhet">
            <img
              src="https://via.placeholder.com/150x100"
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
        <button className="btn-primary">Läs mer</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Klimatvänner © Klimatvänners Organisation 2024</p>
        <p>Lär dig om klimatet - Kontakta oss</p>
      </footer>
    </div>
  );
};

export default Startsida;
