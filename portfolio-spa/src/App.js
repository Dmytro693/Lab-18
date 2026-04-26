import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';
import './index.css';

// Holovnyy komponent z marshrutuzatsiyeyu ta temoyu
function App() {
  // Perevirka poperedno zberezhenoyi temy u localStorage
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Zmina atrybuta body pry zmini stanu temy
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Funktsiya pereklyukannya temy
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="App">
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main style={{ minHeight: '80vh' }}>
          <Routes>
            {/* Redirect z golovnoyi na /about */}
            <Route path="/" element={<Navigate to="/about" />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/my-city" element={<MyCity />} />
            <Route path="/my-future" element={<MyFuture />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;