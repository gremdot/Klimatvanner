import React from 'react';
import './App.css'; // CSS-filen för styling

const FaktaOm = () => {
  return (
    <div className="fakta-om">
      {/* Hero-sektion */}
      <header className="hero">
        <img
          src="https://via.placeholder.com/1200x400" // Byt ut mot en riktig bild
          alt="Koldioxidutsläpp"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Fakta och statistik om koldioxidutsläpp</h1>
          <p>
            Mauris malesuada tempus nisl et aliquam. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Duis rhoncus tempus efficitur.
          </p>
        </div>
      </header>

      {/* Diagram och text-sektioner */}
      <div className="stats">
        {/* Diagram 1 */}
        <div className="stat-item">
          <img
            src="https://via.placeholder.com/200" // Placeholder för diagram
            alt="Cirkeldiagram"
          />
          <p>
            Mauris malesuada tempus nisl et aliquam. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Duis rhoncus tempus efficitur.
          </p>
        </div>

        {/* Diagram 2 */}
        <div className="stat-item">
          <img
            src="https://via.placeholder.com/200" // Placeholder för diagram
            alt="Linjediagram"
          />
          <p>
            Mauris malesuada tempus nisl et aliquam. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Duis rhoncus tempus efficitur.
          </p>
        </div>

        {/* Diagram 3 */}
        <div className="stat-item">
          <img
            src="https://via.placeholder.com/200" // Placeholder för diagram
            alt="Stapeldiagram"
          />
          <p>
            Mauris malesuada tempus nisl et aliquam. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Duis rhoncus tempus efficitur.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Klimatvänner © Klimatvänners Organisation 2024</p>
        <p>Lär dig om klimatet - Kontakta oss</p>
      </footer>
    </div>
  );
};

export default FaktaOm;
