import React from 'react';
import './App.css'; // CSS-filen för styling

const KontaktaOss = () => {
  return (
    <div className="kontakta-oss">
      <h1>Kontakta Oss</h1>

      <div className="kontakt-container">
        {/* Kontaktinformation */}
        <div className="kontakt-info">
          <h2>Kontakt</h2>
          <p>Näsgatan 1234</p>
          <p>456 78</p>
          <p>Stockholm</p>
          <h2>Support</h2>
          <p>Öppet mellan kl: 10:00 - 16:00</p>
          <p>+46 8 306789</p>
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
