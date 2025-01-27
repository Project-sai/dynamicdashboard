// src/components/DarkModeToggle.jsx
import React from 'react';

const DarkModeToggle = ({ toggleDarkMode }) => {
  return (
    <button className="dark-mode-toggle" onClick={toggleDarkMode}>
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
