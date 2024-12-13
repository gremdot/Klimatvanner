import React from 'react';
import { Line } from 'react-chartjs-2';
import glacierData from './data/Glaciers_size.json';
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

const GlacierChart = () => {
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
          text: 'År', // Beskrivning för x-axeln
        },
      },
      y: {
        title: {
          display: true,
          text: 'Medel ackumulerad massbalans (m)', // Beskrivning för y-axeln
        },
      },
    },
  };

  return (
    <div>
      <h2>Glaciärstorlek</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default GlacierChart;
