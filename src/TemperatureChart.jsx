import React from 'react';
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
import { Line } from 'react-chartjs-2';
import temperatureData from './data/Global_temp.json';

// Registrerar ChartJS-komponenter
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TemperatureChart = () => {
  // Hämtar data från JSON
  const years = temperatureData.map((item) => item.Year);
  const gcagTemps = temperatureData.map((item) => item.GCAG);
  const gistempTemps = temperatureData.map((item) => item.GISTEMP);

  // Konfigurerar data för grafen
  const data = {
    labels: years,
    datasets: [
      {
        label: 'GCAG (°C)',
        data: gcagTemps,
        borderColor: 'rgba(255, 99, 132, 1)', // Röd linje
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Röd fyllnad
        fill: true,
      },
      {
        label: 'GISTEMP (°C)',
        data: gistempTemps,
        borderColor: 'rgba(54, 162, 235, 1)', // Blå linje
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Blå fyllnad
        fill: true,
      },
    ],
  };

  // Alternativ för grafens utseende
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
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
          text: 'Temperaturförändring (°C)',
        },
      },
    },
  };

  return (
    <div>
      <h2>Globala Temperaturförändringar</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TemperatureChart;
