import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; /* Importerar moduler från Chart.js */
import emissionsData from './data/CO2_emissions.json';/* Importerar data från en JSON-fil */

/* Registrerar Chart.js-moduler som används i diagrammet */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
); /* Dessa aktiverar nödvändiga komponenter för skalor, linjediagram, titlar, verktygstips */

const Utsläppstabell = () => {
  /* Skapar data som används för linjediagrammet */
  const data = {
    labels: emissionsData.map((item) => item.Year),
    datasets: [
      {
        label: 'Totala CO2-utsläpp (miljoner ton)',
        data: emissionsData.map((item) => item.Total), /* Hämtar CO2-utsläppsdata från JSON-filen */
        borderColor: '#046835',
        backgroundColor: 'rgba(4, 104, 53, 0.2)',
        tension: 0.4,
      },
    ],
  };

  /* i const options dessa är inställningar för diagrammet om hur tabellen ska visas */
  const options = {
    responsive: true, /* Gör diagrammet responsivt */
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Globala CO2-utsläpp över tid',
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
          text: 'CO2-utsläpp (miljoner ton)',
        },
      },
    },
  };

  return (
    <div className="gas">
      <h2>CO2-utsläpp</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Utsläppstabell; /* Exporterar komponenten så att den kan användas i andra filer */
