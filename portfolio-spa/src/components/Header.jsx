import React from 'react';
import { Link } from 'react-router-dom';

// Komponent navigatsiyi ta zminy temy
const Header = ({ theme, toggleTheme }) => {
  return (
    <header>
      <div className="logo">
        <h2>🚀 MyPortfolio</h2>
      </div>
      <nav>
        <Link to="/about">Про мене</Link>
        <Link to="/my-city">Моє місто</Link>
        <Link to="/my-future">Мій розвиток</Link>
      </nav>
      <button className="theme-btn" onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Temna' : '☀️ Svitla'}
      </button>
    </header>
  );
};

export default Header;