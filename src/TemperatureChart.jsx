import React from 'react';
import { Line } from 'react-chartjs-2';
import temperatureData from './data/Global_temp.json';
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

const TemperatureChart = () => {
  const data = {
    labels: temperatureData.map((item) => item.Year),
    datasets: [
      {
        label: 'GCAG (°C)',
        data: temperatureData.map((item) => item.GCAG),
        borderColor: '#ff8800',
        backgroundColor: 'rgba(255, 136, 0, 0.2)',
        tension: 0.4,
      },
      {
        label: 'GISTEMP (°C)',
        data: temperatureData.map((item) => item.GISTEMP),
        borderColor: '#ffcc00',
        backgroundColor: 'rgba(255, 204, 0, 0.2)',
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
        text: 'Globala Temperaturförändringar över Tid',
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
