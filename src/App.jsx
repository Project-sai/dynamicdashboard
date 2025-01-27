
import React from "react";
import Sidebar from "./components/Sidebar1";
import Header from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import PropertyListing from "./components/PropertyListings";

import "./App.css";
import "./styles/Dashboard.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Routes>
            <Route path="/home" element={<PropertyListing />} />
            <Route path="/" element={<Dashboard />} /> {/* Default route */}
          </Routes>
      </div>
    </div>
  </Router>
  );
};

export default App;
