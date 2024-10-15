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
import '../styling/landing.css'; // Optional: your main styles
import Navbar from '../components/Navbar.js'; // Adjust the path as needed

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

function App() {
  const [bitcoinChartData, setBitcoinChartData] = useState(null);

  useEffect(() => {
    const fetchBitcoinChartData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily'
        );
        setBitcoinChartData(response.data.prices);
      } catch (error) {
        console.error('Error fetching Bitcoin chart data:', error);
      }
    };

    fetchBitcoinChartData();
  }, []);

  const chartData = {
    labels: bitcoinChartData ? bitcoinChartData.map(data => new Date(data[0]).toLocaleDateString()) : [],
    datasets: [
      {
        label: 'Bitcoin Price (USD)',
        data: bitcoinChartData ? bitcoinChartData.map(data => data[1]) : [],
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
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>BlockMining</h1>
        <p>Accelerate Your BlockChain Development with our Expertise.</p>
      </header>
      <section className="App-features">
        <h2>Our Story</h2>
        <p> 
        BLOCKMINING was founded in 2017 and has quickly grown into a leading Bitcoin mining investment platform. Since our establishment, we've been at the forefront of the cryptocurrency revolution, offering investors unique opportunities to participate in the exciting world of Bitcoin mining.
        Our journey began with a vision to democratize Bitcoin mining, making it accessible to investors of all sizes. We recognized early on that while many were interested in the potential of Bitcoin, the technical complexities and high costs of mining equipment often posed significant barriers to entry. That's where BLOCKMINING comes in.
        We've built a state-of-the-art mining infrastructure, leveraging the latest in ASIC technology and green energy solutions. Our mining farms are strategically located in regions with low electricity costs and cool climates, optimizing our operational efficiency and maximizing returns for our investors.
        At BLOCKMINING, we offer a range of investment packages tailored to different risk appetites and investment sizes. Whether you're a seasoned crypto enthusiast or a curious newcomer, we have options that suit your needs. Our team of experts constantly monitors market conditions and adjusts our mining strategies to ensure the best possible returns for our investors.
        What sets us apart is our commitment to transparency and education. We believe in empowering our investors with knowledge. Through our platform, you can track your mining progress in real-time, access detailed reports, and learn about the intricacies of Bitcoin mining and blockchain technology.
        We're not just about profits; we're about building a sustainable future for cryptocurrency. That's why we're committed to reducing our carbon footprint, with ongoing initiatives to increase our use of renewable energy sources.
        As the Bitcoin landscape evolves, so do we. We're constantly exploring new technologies and methodologies to stay ahead of the curve. With BLOCKMINING, you're not just investing in Bitcoin mining; you're partnering with a forward-thinking company that's shaping the future of digital finance.
        Join us in the Bitcoin mining revolution. Whether you're looking to diversify your portfolio, hedge against inflation, or simply be part of the cryptocurrency movement, BLOCKMINING offers you a secure, profitable, and exciting way to mine Bitcoin. Let's mine the future together!
        </p>
      </section>
      <section className="key-features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Secure Investments</h3>
            <p>State-of-the-art security measures to protect your assets</p>
          </div>
          <div className="feature">
            <h3>Expert Management</h3>
            <p>Our team of financial experts optimizes your investment strategy</p>
          </div>
          <div className="feature">
            <h3>Diverse Portfolio</h3>
            <p>Access to a wide range of investment options</p>
          </div>
          <div className="feature">
            <h3>Real-time Tracking</h3>
            <p>Monitor your investments anytime, anywhere</p>
          </div>
        </div>
      </section>
      <section className="bitcoin-chart">
        <h2>Bitcoin Price Chart</h2>
        {bitcoinChartData ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <p>Loading Bitcoin chart data...</p>
        )}
      </section>
    </div>
  );
}

export default App;
