import React from 'react';
import { Line } from 'react-chartjs-2';
import seaLevelData from './data/Sea_level.json';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
/**Diagrammet är skapat genom en react komponent som använder sig av react-chartJS-2 samt en JSON-fil med data. Moduler från chartJS hämtas för att kunna skapa och styra diagrammet. 
 */

/** seaLevelData är en array med data. Varje dataobjekt innehåller information om tid (Time) och havsnivåhöjningar (GML) som visas som punkter i diagrammet
 * Metoden map används för att kunna ta bort viss information från varje objekt. Det som tas bort görs med hjälp av item.Time.split(-) där item är datan i den ursprungliga arrayen, och split gör att strängen i  arrayen delas upp med bindesteck, vilket skapar en ny array. 
 * [0] gör att endast det första elementet i arrayen hämtas, alltså året. Detta görs då Grupp 11 ansåg att det inte var relevant att även visa informationen om exempelvis månader. 
 * Det som händer är alltså att map skapar en ny array som bara innehåller alla årtal, denna kallas "labels" och används för x-axeln.
*/
const Havsnivåtabell = () => {
  const data = {
    labels: seaLevelData.map((item) => item.Time.split('-')[0]), // Extrahera bara året
    datasets: [
      {
        label: 'Havsnivåhöjning (mm)',
        data: seaLevelData.map((item) => item.GMSL),
        borderColor: '#0044cc',
        backgroundColor: 'rgba(0, 68, 204, 0.2)',
        tension: 0.4,
      },
    ],
  };
/** Nedan hanterar utseendet samt hur diagrammet ska bete sig */
  const options = {
    responsive: true, //Gör att diagrammet är responsivt
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true, //Används för att en titel ska visas ovanför diagrammet
        text: 'Havsnivåhöjningar över Tid', //Här anges den titeln som vill visas
      },
    },
    scales: {
      x: {
        title: {
          display: true, //För att visa en titel till x axeln 
          text: 'År', //Här anges vad för titel som ska visas
        },
      },
      y: {
        title: {
          display: true, //För att visa en titel till x axeln 
          text: 'Havsnivåhöjning (mm)', //Här anges vad för titel som ska visas
        },
      },
    },
  };

  return (
    <div className="sealevel">
      <h2>Havsnivåhöjningar</h2>
      <Line data={data} options={options} /> {/* Renderar diagrammet */}
    </div>
  );
};

export default Havsnivåtabell;
