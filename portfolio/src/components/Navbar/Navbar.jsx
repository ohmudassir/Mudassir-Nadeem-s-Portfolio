import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme'); // Dark theme class toggle
  };

  return (
    <div className="right-navbar">
      {/* Theme Switcher Button */}
      <div className="theme-switcher" onClick={toggleTheme}>
        {darkMode ? '🌞' : '🌙'}
      </div>

      <ul>
        <li><a href="#home">🏠</a></li>
        <li><a href="#services">🛠️</a></li>
        <li><a href="#portfolio">🎨</a></li>
        <li><a href="#contact">✉️</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
