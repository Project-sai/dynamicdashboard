
import React from "react";
import "../styles/Dashboard.css";
import houses from "../assets/houses.jpg";
import { chartdata,properties } from "../data/properties";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const DashboardCard = () => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <h3>NFT Marketplace</h3>
        <span className="badge">Featured</span>
      </div>
      <img src={houses} alt="NFT" className="house" />
      <div className="dashboard-card-footer">
        <p>House Andromeda</p>
        <p>1.44 Ether</p>
      </div>
    </div>
  );
};
const InvestmentStats = () => {
  return (
    <div className="investment-stats">
      <h3>Investment Stats</h3>
      <div className="stats-grid">
        <div className="stat-card card-total-investment">
          <p>Total Investment</p>
          <span>0.56 Ether</span>
          <div className="tooltip">Total amount invested in Ether.</div>
        </div>
        <div className="stat-card card-weekly-returns">
          <p>Weekly Returns</p>
          <span>0.005 Ether</span>
          <div className="tooltip">Returns earned this week.</div>
        </div>
        <div className="stat-card card-expenses">
          <p>Expenses</p>
          <span>0.005 Ether</span>
          <div className="tooltip">Total expenses incurred.</div>
        </div>
      </div>
    </div>
  );
};

const PropertySlider = () => {
  return (
    <div className="property-slider">
    <h3>My Portfolio</h3>
    <div className="portfolio-grid">
      {properties.map((property, index) => (
        <div key={index} className="portfolio-card" style={{ backgroundColor: property.color }}>
          {property.name}
        </div>
      ))}
    </div>
  </div>
  );
};

const TotalDistributions = () => {
  return (
<div className="total-distributions">
      <h3>Total Distributions</h3>
      <div className="distribution-chart">
        <ResponsiveContainer width="100%" height={170}>
          <LineChart data={chartdata}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3f51b5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const MyCards = () => {
  return (
    <div className="my-cards">
      <h4>My Cards</h4>
      <div className="card">
        <div className="card-balance">
          <p>Balance</p>
          <h2>$521,652</h2>
        </div>
        <div className="card-profit">
          <p>Monthly Profit</p>
          <span>$14,225</span>
        </div>
      </div>
    </div>
  );
};


const TopPicks = () => {
  return (
    <div className="top-picks">
      <h3>Top Picks</h3>
      <ul>
        <li>Roma Avenue - 0.000345 Ether</li>
        <li>Atlas Shack - 0.000678 Ether</li>
        <li>Germanrin - 0.000887 Ether</li>
        <li>Heavens - 0.000761 Ether</li>
        <li>Heretho - 0.000302 Ether</li>
      </ul>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Left Section */}
      <div className="dashboard-left">
        <div className="top-row">
          <DashboardCard />
          <InvestmentStats />
        </div>
        <div className="bottom-row">
          <PropertySlider />
          <TotalDistributions />
        </div>
      </div>

      {/* Right Section */}
      <div className="dashboard-right">
        <MyCards />
        <TopPicks />
      </div>
    </div>
  );
};

export default Dashboard;

