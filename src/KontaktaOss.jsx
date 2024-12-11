import React from 'react';
import './App.css'; // CSS-filen för styling

const KontaktaOss = () => {
  return (
    <div className="startsida">
    {/* Hero-sektionen */}
    <header className="hero">
    <div className="overlay"></div>
      <img
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Byt ut mot din bild-URL
        alt="Hero"
        className="hero-image"
      />
      <div className="hero-text">
        <h1>Kontakta oss</h1>
        <p>Har du frågor, idéer eller tankar så är du varmt välkommen att höra av dig till oss på Klimatvänner.
        Skicka gärna ett meddelande till oss via mejl formuläret - vi hjälper dig gärna!</p>
      </div>
    </header>

      <div className="kontakt-container">
        {/* Kontaktinformation */}
        <div className="kontakt-info">
          <h2>Kontakt</h2>
          <p>Näsgatan 123</p>
          <p>114 56</p>
          <p>Stockholm</p>
          <h2>Support</h2>
          <p>Öppet mellan kl: 10:00 - 16:00</p>
          <p>+4673 12131415</p>
        </div>

        {/* Kontaktformulär */}
        <div className="kontakt-form">
          <h2>Kontakta oss via mail</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Namn*</label>
              <input type="text" id="name" placeholder="Namn" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-postadress*</label>
              <input type="email" id="email" placeholder="E-postadress" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Meddelande*</label>
              <textarea id="message" placeholder="Skriv ditt meddelande här..." required></textarea>
            </div>
            <button className="btn" type="submit">Skicka</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default KontaktaOss;
