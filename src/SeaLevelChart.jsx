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

const SeaLevelChart = () => {
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Havsnivåhöjningar över Tid',
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
          text: 'Havsnivåhöjning (mm)',
        },
      },
    },
  };

  return (
    <div>
      <h2>Havsnivåhöjningar</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default SeaLevelChart;
