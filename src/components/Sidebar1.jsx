

import React from "react";
import { Link } from 'react-router-dom';
import { FaHome, FaChartPie, FaWallet, FaUser, FaCalendarAlt, FaCog,FaSignOutAlt,FaTachometerAlt  }  from "react-icons/fa";
import "../Styles/Sidebar.css";
import group from '../assets/Group.png'
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo"><img src={group} alt="img" /></div>
      <nav>
      <Link to="/"><button><FaTachometerAlt /></button></Link>

        <Link to="/home"><button><FaHome /></button></Link>
        <button><FaChartPie /></button>
        <button><FaWallet /> </button>
        <button><FaUser /> </button>
        <button><FaCalendarAlt /> </button>
        <button><FaCog /> </button>
      </nav>
      <button className="logout-btn"><FaSignOutAlt /> </button>
    </aside>
  );
};

export default Sidebar;
