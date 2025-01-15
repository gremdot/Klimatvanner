import React from 'react';
import { Line } from 'react-chartjs-2'; 
/*import { Line } from 'react-chart-2'; importerar line-komponenten från javascript 
biblioteket chart.js som gör det möjligt att utforma datan som ett linjediagram*/
import glacierData from './data/Glaciers_size.json'; 
/*import glacierData from './data/Glaciers_size.json'; importerar 
Glaciers_size.json från mappen data */

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
/* import {....} from 'chart.js' importerar moduler som gör det möjligt att bygga upp diagrammet, 
till exempel LineElement som ansvarar för att rita linjen*/


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

/*Chart.js bygger på två huvudelar, datasets och options som i vårt fall är const data och const 
options i funktionen Glaciärtabell. I const data finns det som visas då man för muspekaren över 
linjen med värden och dess etikett, samt bakgrundsfärg */
const Glaciärtabell = () => {
  const data = {
    labels: glacierData.map((item) => item.Year), // Extraherar året från datan
    datasets: [
      {
        label: 'Glaciärers massbalans (m)',
        data: glacierData.map((item) => item['Mean cumulative mass balance']),
        borderColor: '#0099ff',
        backgroundColor: 'rgba(0, 153, 255, 0.2)',
        tension: 0.4,
      },
    ],
  };

  /*I const options finns själva grafen med skalorna y-axel och x-axel samt den
  beskrivande texten på dem, även att diagrammet är responsivt och anpassar sig efter olika skärmar
  genom responsive: true */
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Glaciärers Massbalans över Tid',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'År', 
        },
      },
      y: {
        title: {
          display: true,
          text: 'Medel ackumulerad massbalans (m)', 
        },
      },
    },
  };

  /*Return renderar en <h2> rubrik samt linjediagrammet med konstanterna data och options */
  return (
    <div className="glacier">
      <h2>Glaciärstorlek</h2>
      <Line data={data} options={options} />
    </div>
  );
};

/*Exporterar funktionen Glaciärtabell */
export default Glaciärtabell;
