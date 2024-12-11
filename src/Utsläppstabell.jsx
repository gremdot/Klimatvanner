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
} from 'chart.js';
import emissionsData from './data/CO2_emissions.json'; // Flyttad hit

// Registrera komponenter
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Utsläppstabell = () => {
  // Förbered data för diagrammet
  const data = {
    labels: emissionsData.map((item) => item.Year),
    datasets: [
      {
        label: 'Totala CO2-utsläpp (miljoner ton)',
        data: emissionsData.map((item) => item.Total),
        borderColor: '#046835',
        backgroundColor: 'rgba(4, 104, 53, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
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
    <div>
      <h2>CO2-utsläpp</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Utsläppstabell;
