import React from 'react';
import './App.css';

const LärDig = () => {
  return (
    <div className="lär-dig">
      <h1>Hur kan du påverka?</h1>

      {/* Befintligt innehåll */}
      <div className="topics">
        <div className="topic">
          <img src="https://via.placeholder.com/150x100" alt="Återvinning" />
          <div>
            <h3>Återvinning & Pant</h3>
            <p>
              Klimatförändringarna påverkar både djur och natur. Såväl som
              samhället och hälsa. Det påverkar allt vi gör på planeten! Vill du
              lära dig mer?
            </p>
          </div>
        </div>
        <div className="topic">
          <img src="https://via.placeholder.com/150x100" alt="Handla miljövänligt" />
          <div>
            <h3>Handla Miljövänligt</h3>
            <p>
              Klimatförändringarna påverkar både djur och natur. Såväl som
              samhället och hälsa. Det påverkar allt vi gör på planeten! Vill du
              lära dig mer?
            </p>
          </div>
        </div>
        <div className="topic">
          <img src="https://via.placeholder.com/150x100" alt="Matsvinn" />
          <div>
            <h3>Matsvinn</h3>
            <p>
              Klimatförändringarna påverkar både djur och natur. Såväl som
              samhället och hälsa. Det påverkar allt vi gör på planeten! Vill du
              lära dig mer?
            </p>
          </div>
        </div>
        <div className="topic">
          <img src="https://via.placeholder.com/150x100" alt="Diet" />
          <div>
            <h3>Diet</h3>
            <p>
              Klimatförändringarna påverkar både djur och natur. Såväl som
              samhället och hälsa. Det påverkar allt vi gör på planeten! Vill du
              lära dig mer?
            </p>
          </div>
        </div>
      </div>

      {/* Befintligt innehåll - länkar */}
      <section className="learn-more">
        <h2>Lär dig mer</h2>
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

      {/* Footer */}
      <footer className="footer">
        <p>Klimatvänner © Klimatvänners Organisation 2024</p>
        <p>Lär dig om klimatet - Kontakta oss</p>
      </footer>
    </div>
  );
};

export default LärDig;
