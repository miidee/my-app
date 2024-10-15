import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BitcoinPriceSection = () => {
  const [bitcoinData, setBitcoinData] = useState(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily'
        );
        setBitcoinData(response.data.prices);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
      }
    };

    fetchBitcoinData();
  }, []);

  const chartData = {
    labels: bitcoinData ? bitcoinData.map(data => new Date(data[0]).toLocaleDateString()) : [],
    datasets: [
      {
        label: 'Bitcoin Price (USD)',
        data: bitcoinData ? bitcoinData.map(data => data[1]) : [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Bitcoin Price Last 30 Days (USD)',
      },
    },
  };

  return (
    <section className="bitcoin-chart">
      <h2>Bitcoin Price Chart</h2>
      {bitcoinData ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <p>Loading Bitcoin data...</p>
      )}
    </section>
  );
};

export default BitcoinPriceSection;
