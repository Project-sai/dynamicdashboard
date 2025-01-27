// import React, { useState } from "react";
// import styles from "./Navbar.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>MyApp</div>
//       <ul className={`${styles.navLinks} ${isMenuOpen ? styles.showMenu : ""}`}>
//         <li><a href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#services">Services</a></li>
//         <li><a href="#contact">Contact</a></li>
//       </ul>
//       <button className={styles.toggleButton} onClick={toggleMenu}>
//         <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import "../Styles/Navbar.css";
import user from '../assets/user.png'
const Header = () => {
  return (
    <header className="header">
      <h1 style={{marginLeft:'30px'}}>Dashboard</h1>
      <div className="user-profile">
        <img
          src={user}
          alt="User Avatar"
          className="avatar"
        />
        <span>Rowena Ravenclaw</span>
      </div>
    </header>
  );
};

export default Header;
