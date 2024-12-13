import React, { useState } from 'react';
import './App.css'; //så att css filen importeras för stylingen

/* Funktionen klimatnyheter är huvudkomponenten för sidan klimatnyheter.*/
const Klimatnyheter = () => {
  /** Funktionen använder useState för att skapa ett tillstånd där alla nyheterna lagras 
   * I title står varje nyhets titel
   * I date står datumet
   * I description så står en kort beskrivning av nyheten som alltid visas
   * I extendedDescription så finns en utökad text till varje nyhet som visas om användaren klickar på "läs mer" knappen
   * Image är för att varje nyhet visas med en tillhörande bild
   * showMore är ett tillstånd som hanterar ifall den utökande nyhetstexten ska visas eller inte. 
  */
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
      title: 'Översvämningar i Spanien - över 200 döda',
      date: '10 November 2024',
      description:
        'Stora översvämningar har drabbat Spanien. Valencia är hårt drabbat. Läs mer om hjälpinsatser.',
      extendedDescription:
        'Spaniens regering har mobiliserat räddningstjänst och internationell hjälp. Detta väcker frågor om hur klimatförändringar påverkar kustområden globalt.',
      image: './översvämningar.jpg',
      showMore: false,
    },
    {
      id: 3,
      title: 'Mindre än 2000 vilda pandor kvar',
      date: '8 November 2024',
      description:
        'Endast 1 864 vilda pandor lever kvar i naturen. Läs mer om utrotningshotade arter.',
      extendedDescription:
        'Pandan är en ikon för bevarandearbete. Forskare och organisationer arbetar hårt för att skydda dess livsmiljöer i Kinas bergsområden.',
      image: './panda.webp',
      showMore: false,
    },
  ]);

  /** 
   * Funktionen additionalNews skapar en lista med nyheter som kan visas när en användare vill se fler nyheter genom knappen "Ladda fler nyheter"
   */
  const additionalNews = [
    {
      id: 4,
      title: 'Arktis smälter snabbare än väntat',
      date: '5 Oktober 2024',
      description:
        'Forskare varnar för att isarna i Arktis smälter dubbelt så snabbt som förutspått. Läs mer om konsekvenserna.',
      extendedDescription:
        'Isarna i Arktis påverkar hela jordens klimat. Smältningen bidrar till stigande havsnivåer och förändrade vädermönster globalt.',
      image: 'https://images.pexels.com/photos/694218/pexels-photo-694218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      showMore: false,
    },
    {
      id: 5,
      title: 'Stigande havsnivåer hotar kuststäder',
      date: '15 September 2024',
      description:
        'Stigande havsnivåer utgör ett allt större hot mot kuststäder världen över. Läs om möjliga lösningar.',
      extendedDescription:
        'Stigande havsnivåer är ett akut problem som kräver internationellt samarbete och innovativa lösningar för att skydda människor och natur.',
      image: 'https://images.pexels.com/photos/26202087/pexels-photo-26202087/free-photo-of-stad-vatten-gata-byggnader.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      showMore: false,
    },
  ];

  /**
   * En tillståndshanterare (loadIndex) som håller koll på hur många fler nyheter som har tryckts fram av användaren från listan i additionalNews.
   * useState(0) innebär att värdet för tillståndet från början är 0. Varje gång en användare trycker på knappen "Ladda fler nyheter" hamnar yttligare en nyhet i funktionen news, och loadIndex uppdateras med +1
   */
  const [loadIndex, setLoadIndex] = useState(0);

  /**
   * Funktionen loadMore laddar fram fler nyheter från additionalNews och lägger till dom i news. If variabeln gör att det inte går att ladda fram fler nyheter än vad som finns i listan i additionalNews.
   * Om användaren redan har laddat fram alla nyheter som finns i listan, alltså att loadIndex är samma som additionalNews.lenght så händer alltså ingenting mer. 
   * setNews hämtar innehållet från listan som finns i news och läggar till nästa nyhet från listan i additionalNews, baserat på datan från loadIndex.
   * setLoadIndex(loadIndex +1) ökar loadIndex med 1 varje gång som funktionen anropas.
   */
  const loadMore = () => {
    if (loadIndex < additionalNews.length) {
      setNews([...news, additionalNews[loadIndex]]);
      setLoadIndex(loadIndex + 1);
    }
  };

  /**Funktionen toggleDescription används för att hantera om den utökande texten (extendedDescription) för varje nyhet ska visas eller inte för varje individuell nyhet.
   * Funktionen anropas när en användare klickar på knappen "läs mer" eller "stäng"
   * 
   */
  const toggleDescription = (id) => {
    setNews((prevNews) =>
      prevNews.map((item) =>
        item.id === id ? { ...item, showMore: !item.showMore } : item
      )
    );
  };

  return (
    <div >
      {/* först renderas precis som på samtliga sidor, en header med bild + text + overlay- och hero klassen 
      som gör bilden mörkare. Läs mer på sidan LärDig.jsx. Det är samma princip som där*/}
      <header className="hero">
        <div className="overlay"></div>
        <img
          src="https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Hero"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Klimatnyheter</h1>
          <p>
           Världen förändras snabbare än någonsin. 
          </p>
        </div>
      </header>

      {/* Lista med nyheter */}
      <div className="news-list">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <img src={item.image} alt={item.title} />
            <div className="news-content">
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
          </div>
        ))}
      </div>

      {/* knapp för att ladda fler nyheter */}
      {loadIndex < additionalNews.length && (
        <button className="btn load" onClick={loadMore}>
          Ladda fler nyheter
        </button>
      )}
    </div>
  );
};

export default Klimatnyheter;
