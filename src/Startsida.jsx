import React, { useState } from 'react';
import './App.css'; 
import Quiz from './Quiz'; 

const Startsida = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'Skogsbränder i Norden',
      date: '12 December 2024',
      description:
        'Varje år inträffar över 40 000 vegetationsbränder i Sverige. Läs om hur man kan minska riskerna.',
      extendedDescription:
        'Skogsbränder har blivit allt vanligare på grund av klimatförändringar och extremväder. Forskare arbetar med att utveckla bättre metoder för att förebygga och bekämpa bränder.',
      image: './forest_smoke.jpeg',
      showMore: false,
    },
    {
      id: 2,
      title: 'Översvämningar i Spanien',
      date: '10 November 2024',
      description:
        'Stora översvämningar har drabbat Spanien. Valencia är hårt drabbat. Läs mer om hjälpinsatser.',
      extendedDescription:
        'Spaniens regering har mobiliserat räddningstjänst och internationell hjälp. Detta väcker frågor om hur klimatförändringar påverkar kustområden globalt.',
      image: './översvämningar.jpg',
      showMore: false,
    },
  ]);

  const toggleDescription = (id) => {
    setNews((prevNews) =>
      prevNews.map((item) =>
        item.id === id ? { ...item, showMore: !item.showMore } : item
      )
    );
  };

  return (
    <div className="startsida">
      {/* Hero-sektionen */}
      <header className="hero">
        <div className="overlay"></div>
        <img src="./zebra.png" alt="två zebror i safari" className="hero-image" />
        <div className="hero-text">
          <h1>Klimatvänner</h1>
          <p>Det finns ingen planet B, dags att steppa upp!</p>
        </div>
      </header>

 {/* Rullande banner */}
 <div className="scroll-banner">
    <p>Scrolla ner för att testa dina klimatkunskaper med vårt quiz!</p>
  </div>

      {/* Mission-sektionen */}
      <section className="mission">
        <h2>Välkommen till klimatvänner</h2>
        <p>
          Klimatvänner finns för dig som vill göra skillnad – och tro oss, det
          behövs! Vi riktar oss till unga som bryr sig om klimatet och vill
          bidra till en hållbar framtid.
        </p>
        <img src="./klimatvanner.png" alt="Mission logo" />
      </section>

      {/* Quiz */}
      <section className="mission">
        <h2>Vill du testa dina klimatkunskaper?</h2>
        <p>
          Hur mycket koll har du på klimatet och hur vi kan påverka det? Ta vårt
          snabba quiz och utmana dig själv!
        </p>
        <Quiz />
      </section>

      {/* Klimatnyheter */}
      <section className="klimatnyheter">
        <h2>Klimatnyheter</h2>
        <div className="nyheter">
          {news.map((item) => (
            <div key={item.id} className="nyhet">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.date}</p>
              <p>{item.description}</p>
              {item.showMore && <p>{item.extendedDescription}</p>}
              <button
                className="btn toggle"
                onClick={() => toggleDescription(item.id)}
              >
                {item.showMore ? 'Stäng' : 'Läs mer'}
              </button>
            </div>
          ))}
        </div>
        <a href="/klimatnyheter">
          <button className="btn">Klicka här för att läsa fler klimatnyheter</button>
        </a>
      </section>
    </div>
  );
};

export default Startsida;
