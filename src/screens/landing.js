import React, { useState, useEffect, useRef } from 'react';
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
  const reviewsRef = useRef(null);
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const tickerRef = useRef(null);

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

  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'
        );
        setCryptoPrices(response.data);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
      }
    };

    fetchCryptoPrices();
    const interval = setInterval(fetchCryptoPrices, 60000); // Update every minute

    return () => clearInterval(interval);
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

  useEffect(() => {
    const slider = reviewsRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft += 1;
        }
      }, 30);
    };

    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

    startScroll();
    slider.addEventListener('mouseenter', stopScroll);
    slider.addEventListener('mouseleave', startScroll);

    return () => {
      stopScroll();
      slider.removeEventListener('mouseenter', stopScroll);
      slider.removeEventListener('mouseleave', startScroll);
    };
  }, []);

  useEffect(() => {
    const ticker = tickerRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (ticker.scrollLeft + ticker.clientWidth >= ticker.scrollWidth) {
          ticker.scrollLeft = 0;
        } else {
          ticker.scrollLeft += 1;
        }
      }, 30);
    };

    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

    startScroll();
    ticker.addEventListener('mouseenter', stopScroll);
    ticker.addEventListener('mouseleave', startScroll);

    return () => {
      stopScroll();
      ticker.removeEventListener('mouseenter', stopScroll);
      ticker.removeEventListener('mouseleave', startScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="header-content">
          <h1>BlockMining</h1>
          <p>Accelerate Your BlockChain Development with our Expertise.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>
      <section className="App-features">
        {/* <h2>Our Story</h2> */}
        <p>
          {/* BLOCKMINING was founded in 2017 and has quickly grown into a leading Bitcoin mining investment platform. Since our establishment, we've been at the forefront of the cryptocurrency revolution, offering investors unique opportunities to participate in the exciting world of Bitcoin mining. */}
          {/* Our journey began with a vision to democratize Bitcoin mining, making it accessible to investors of all sizes. We recognized early on that while many were interested in the potential of Bitcoin, the technical complexities and high costs of mining equipment often posed significant barriers to entry. That's where BLOCKMINING comes in. */}
          {/* We've built a state-of-the-art mining infrastructure, leveraging the latest in ASIC technology and green energy solutions. Our mining farms are strategically located in regions with low electricity costs and cool climates, optimizing our operational efficiency and maximizing returns for our investors. */}
          {/* At BLOCKMINING, we offer a range of investment packages tailored to different risk appetites and investment sizes. Whether you're a seasoned crypto enthusiast or a curious newcomer, we have options that suit your needs. Our team of experts constantly monitors market conditions and adjusts our mining strategies to ensure the best possible returns for our investors. */}
          {/* What sets us apart is our commitment to transparency and education. We believe in empowering our investors with knowledge. Through our platform, you can track your mining progress in real-time, access detailed reports, and learn about the intricacies of Bitcoin mining and blockchain technology. */}
          {/* We're not just about profits; we're about building a sustainable future for cryptocurrency. That's why we're committed to reducing our carbon footprint, with ongoing initiatives to increase our use of renewable energy sources. */}
          {/* As the Bitcoin landscape evolves, so do we. We're constantly exploring new technologies and methodologies to stay ahead of the curve. With BLOCKMINING, you're not just investing in Bitcoin mining; you're partnering with a forward-thinking company that's shaping the future of digital finance. */}
          {/* Join us in the Bitcoin mining revolution. Whether you're looking to diversify your portfolio, hedge against inflation, or simply be part of the cryptocurrency movement, BLOCKMINING offers you a secure, profitable, and exciting way to mine Bitcoin. Let's mine the future together! */}
        </p>
      </section>
      <section className="key-features">
        <h2 style={{ color: '#007bff', margin: '0', fontSize: '1.1rem', fontWeight: 'bold', fontStyle: 'italic', paddingBottom: '20px' }}>Why Choose Us</h2>
        <p className="why-choose-us-description" style={{ color: 'black', margin: '0', fontSize: '0.9rem', fontWeight: 'normal', }}>BLOCKMINING was founded in 2017 and has quickly grown into a leading CrytptoCurrency mining investment platform. Since our establishment, we've been at the forefront of the cryptocurrency revolution, offering investors unique opportunities to participate in the exciting world of cryptocurrency mining. Let's break down the components of our famous tagline to provide a well-detailed explanation of who we are at BlockMining...</p>
        <div className="features-grid">
          <div className="feature">
            <h3 style={{ color: 'black', margin: '10px', fontSize: '1.1rem', fontWeight: 'bold', }}>Secure Investments</h3>
            <p style={{ color: 'black', margin: '0', fontSize: '0.9rem', fontWeight: 'normal', }}>State-of-the-art security measures to protect your assets</p>
          </div>
          <div className="feature">
            <h3  style={{ color: 'black', margin: '10px', fontSize: '1.1rem', fontWeight: 'bold', }}>Expert Management</h3>
            <p style={{ color: 'black', margin: '0', fontSize: '0.9rem', fontWeight: 'normal', }}>Our team of financial experts optimizes your investment strategy</p>
          </div>
          <div className="feature">
            <h3  style={{ color: 'black', margin: '10px', fontSize: '1.1rem', fontWeight: 'bold', }}>Diverse Portfolio</h3>
            <p style={{ color: 'black', margin: '0', fontSize: '0.9rem', fontWeight: 'normal', }}>Access to a wide range of investment options</p>
          </div>
          <div className="feature">
            <h3 style={{ color: 'black', margin: '10px', fontSize: '1.1rem', fontWeight: 'bold', }}>Real-time Tracking</h3>
            <p style={{ color: 'black', margin: '0', fontSize: '0.9rem', fontWeight: 'normal', }}>Monitor your investments anytime, anywhere</p>
          </div>
        </div>
      </section>
     <section className="crypto-ticker">
        <h2 style={{ color: '#007bff', margin: '0', fontSize: '1.1rem', fontWeight: 'bold', fontStyle:'italic', paddingBottom:'20px'}}>Cryptocurrency Prices</h2>
        <div className="ticker-wrapper" ref={tickerRef}>
          <div className="ticker-content">
            {cryptoPrices.map((crypto) => (
              <div key={crypto.id} className="ticker-item">
                <img src={crypto.image} alt={crypto.name} />
                <span>{crypto.symbol.toUpperCase()}</span>
                <span>${crypto.current_price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="investment-plans">
        <h2 style={{ color: '#007bff', margin: '0', fontSize: '1.1rem', fontWeight: 'bold', fontStyle: 'italic' }}>Our Services
        </h2>
        <p style={{ color: 'black', margin: '0', fontSize: '0.9rem', fontWeight: 'normal', paddingBottom: '40px' }}>At BlockMining, we offer a range of investment packages tailored to different risk appetites and investment sizes. Whether you're a seasoned crypto enthusiast or a curious newcomer, we have options that suit your needs. Our team of experts constantly monitors market conditions and adjusts our mining strategies to ensure the best possible returns for our investors. </p>
        <div className="plans-grid">
          <div className="plan">
            <h3>Basic Plan</h3>
            <p className="price">$500</p>
            <ul>
              <li>2- 3% daily profits</li>
              <li>Access to basic mining operations</li>
              <li>Weekly payouts</li>
              <li>24/7 customer support</li>
            </ul>
            <button className="plan-button">Choose Plan</button>
          </div>
          <div className="plan">
            <h3>Growth Plan</h3>
            <p className="price">$2,000</p>
            <ul>
              <li>2-3% daily Profits</li>
              <li>Enhanced mining power</li>
              <li>Daily payouts</li>
              <li>Priority customer support</li>
              <li>Monthly performance reports</li>
            </ul>
            <button className="plan-button">Choose Plan</button>
          </div>
          <div className="plan">
            <h3>Premium Plan</h3>
            <p className="price">$10,000</p>
            <ul>
              <li >4-5% daily profits</li>
              <li>Maximum mining efficiency</li>
              <li>Instant payouts</li>
              <li>VIP customer support</li>
              <li>Exclusive market insights</li>
            </ul>
            <button className="plan-button">Choose Plan</button>
          </div>
          <div className="plan">
            <h3>Platinum Plan</h3>
            <p className="price">$20,000</p>
            <ul>
              <li>6-7% daily profits</li>
              <li>Maximum mining efficiency</li>
              <li>Instant payouts</li>
              <li>VIP customer support</li>
              <li>Detailed analytics dashboard</li>
              <li>Exclusive market insights</li>
            </ul>
            <button className="plan-button">Choose Plan</button>
          </div>
        </div>
      </section>


      
      <section className="user-reviews">
        <h2 style={{ color: '#007bff', margin: '0', fontSize: '1.1rem', fontWeight: 'bold', fontStyle: 'italic' ,paddingBottom:'20px'}}>What Our Users Say</h2>
        <div className="reviews-slider" ref={reviewsRef}>
          <div className="review">
            <p>"BlockMining has transformed my investment strategy. The returns are incredible!"</p>
            <h4>- John D.</h4>
          </div>
          <div className="review">
            <p>"I've tried other platforms, but none compare to the security and profitability of BlockMining."</p>
            <h4>- Sarah M.</h4>
          </div>
          <div className="review">
            <p>"The customer support is top-notch. They're always there when I need them."</p>
            <h4>- Michael R.</h4>
          </div>
          <div className="review">
            <p>"I started with the Basic Plan and quickly upgraded to Premium. The results speak for themselves!"</p>
            <h4>- Emily L.</h4>
          </div>
          <div className="review">
            <p>"BlockMining has a real-time tracking feature gives me peace of mind. I always know how my investment is performing."</p>
            <h4>- David W.</h4>
          </div>
        </div>
      </section>
      <section className="expert-section">
        <div className="expert-image">
          <img src="https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Expert consultation" />
        </div>
        <div className="expert-form">
          <h2 style={{ color: '#007bff', margin: '0', fontSize: '1.1rem', fontWeight: 'bold', fontStyle: 'italic', paddingBottom:'20px'}}>Need More Information?</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <select required>
              <option value="">Select a Topic</option>
              <option value="investment">Investment Strategies</option>
              <option value="mining">Mining Operations</option>
              <option value="technology">Blockchain Technology</option>
            </select>
            <textarea placeholder="Your Question" required></textarea>
            <button type="submit" className="submit-button">Talk to an Expert</button>
          </form>
        </div>
      </section>
      <style jsx>{`
        .expert-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4rem 5%;
          background-color: #ffffff;
        }
        .expert-image {
          flex: 1;
          padding-right: 2rem;
        }
        .expert-image img {
          max-width: 100%;
          height: auto;
          border-radius: 10px;
        }
        .expert-form {
          flex: 1;
          padding-left: 2rem;
        }
        @media (max-width: 768px) {
          .expert-section {
            flex-direction: column;
          }
          .expert-image {
            display: none;
          }
          .expert-form {
            padding-left: 0;
            width: 100%;
          }
        }
      `}</style>
      <footer className="bottom-navbar">
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
          <li><a href="/careers">Careers</a></li>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/team">Our Team</a></li>
           
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="/mining">Mining</a></li>
            <li><a href="/consulting">Consulting</a></li>
            <li><a href="/investment">Investment</a></li>
           
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest news and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>
      </footer>
      <div className="copyright">
        <p>&copy; 2023 BlockMining. All rights reserved.</p>
      </div>
      {/* <section className="crypto-ticker">
        <h2 style={{ color: 'black', margin: '0', fontSize: '1.5rem', fontWeight: 'bold' }}>Cryptocurrency Prices</h2>
        <div className="ticker-wrapper" ref={tickerRef}>
          <div className="ticker-content">
            {cryptoPrices.map((crypto) => (
              <div key={crypto.id} className="ticker-item">
                <img src={crypto.image} alt={crypto.name} />
                <span>{crypto.symbol.toUpperCase()}</span>
                <span>${crypto.current_price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
