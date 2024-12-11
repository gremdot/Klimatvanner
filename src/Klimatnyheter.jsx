import React, { useState } from 'react';
import './App.css';

const Klimatnyheter = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Skogsbränder i Norden',
      date: '12 December 2024',
      description:
        'Varje år inträffar över 40 000 vegetationsbränder i Sverige. Läs om hur man kan minska riskerna.',
      image: "./forest_smoke.jpeg", 
    },
    {
      id: 2,
      title: 'Översvämningar i Spanien - över 200 döda',
      date: '10 November 2024',
      description:
        'Stora översvämningar har drabbat Spanien. Valencia är hårt drabbat. Läs mer om hjälpinsatser.',
      image: './översvämningar.jpg',
    },
    {
      id: 3,
      title: 'Mindre än 2000 vilda pandor kvar',
      date: '8 November 2024',
      description:
        'Endast 1 864 vilda pandor lever kvar i naturen. Läs mer om utrotningshotade arter.',
      image: './panda.webp',
    },
  ]);

  const loadMore = () => {
    // Simulera att fler nyheter laddas
    setNews([
      ...news,
      {
        id: 4,
        title: 'Exempelnyhet',
        date: '1 Januari 2025',
        description: 'Detta är en exempelnyhet som laddas vid klick.',
        image: 'https://via.placeholder.com/150x100',
      },
    ]);
  };

  return (
    <div className="lär-dig">
      {/* Filter och sök */}
      <div className="filter-section">
        <select>
          <option>Kategori</option>
          <option>Miljö</option>
          <option>Klimat</option>
          <option>Djur</option>
        </select>
        <select>
          <option>År</option>
          <option>2024</option>
          <option>2023</option>
          <option>2022</option>
        </select>
        <div className="search-bar">
          <input type="text" placeholder="Sök..." />
          <button className="btn search">🔍</button>
        </div>
      </div>

      {/* Lista med nyheter */}
      <div className="news-list">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <img src={item.image} alt={item.title} />
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.date}</p>
              <p>{item.description}</p>
              <a href="#">Läs mer</a>
            </div>
          </div>
        ))}
      </div>

      {/* Ladda fler-knapp */}
      <button className="btn load" onClick={loadMore}>
        Ladda fler nyheter
      </button>
    </div>
  );
};

export default Klimatnyheter;
