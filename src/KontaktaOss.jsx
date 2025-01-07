import React from 'react';
import './App.css'; // CSS-filen för styling

const KontaktaOss = () => {
  return (
    <div>
    {/* Hero-sektionen */}
    <header className="hero">
    <div className="overlay"></div>
      <img src="./växande_växt.png" alt="händer som håller en växande planta" className="hero-image"/>
      <div className="hero-text">
        <h1>Kontakta oss</h1>
        <p>Har du frågor, idéer eller tankar så är du varmt välkommen att höra av dig till oss på Klimatvänner.
        Skicka gärna ett meddelande till oss via mejl formuläret - vi hjälper dig gärna!</p>
      </div>
      {/*En <header> med klass "hero" som består av <img>, <h1> och <p>. Detta mönster följs på var sida */}
    </header>

      
      <div className="kontakt-container">

        {/* Kontaktinformation */}
        <div className="kontakt-info">
          <h2>Kontakt</h2>
          <p>Näsgatan 123</p>
          <p>114 56</p>
          <p>Stockholm</p>
          <h2 class="support">Support</h2>
          <p>Öppet mellan kl: 10:00 - 16:00</p>
          <p>+4673 12131415</p>
        </div>
        {/*En <div> med klass "kontakt-info". Den består av två <h2> och flera <p> som anger kontaktinformation till användare.
        klassen support skapar ett avstånd mellan support och paragrafen ovan*/}

        {/* Kontaktformulär */}
        <div className="kontakt-form">
          <h2>Kontakta oss via mail</h2>
          <p>Fält med * måste fyllas i.</p>
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
          {/*Form av ett kontakt formulär som består av en <form> med en huvud <div> med klass "kontakt-form". I huvud <div> ligger det tre yttligare <div> med klass "form-group". Dessa divs uppgör tre fält med <input> type text, email och message. Fälten är alla så att användare inte ska kunna submit utan alla fält ifyllda. Fälten har även placeholder texter som beskriver innehållet som behövs. Var <input> har en <label> som också förtydligör vilket fält som är till för vad i formuläret.*/}
        </div>
      </div>
    </div>
  );
};

export default KontaktaOss;
