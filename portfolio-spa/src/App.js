import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importy komponentiv (Header ta Footer)
import Header from './components/Header';
import Footer from './components/Footer';

// Importy storinok (Pages)
import AboutMe from './pages/AboutMe';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';

// Import styliv (perekonaytesya, shcho fajl index.css isnuje)
import './index.css';

function App() {
  // Inicializatsiya temy: pereviryayemo localStorage, shchob zberehty vybir korystuvacha
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Vidstezhennya zminy temy dlya onovlennya atributiv body ta localStorage
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Funktsiya dlya pereklyuchennya mizh svitloyu ta temnoyu temamy
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    /* Vykorystovuyemo HashRouter zamist BrowserRouter dlya GitHub Pages.
      Tse zapobihaje pomyltsi 404 pry onovlenni storinky pislya deployu.
    */
    <Router>
      <div className="App">
        {/* Peredayemo potochnu temu ta funktsiyu dlya yiyi zminy v Header */}
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        <main style={{ minHeight: '80vh', padding: '20px 0' }}>
          <Routes>
            {/* Redyrekt z kornevoho shlyakhu na storinku "Pro mene" */}
            <Route path="/" element={<Navigate to="/about" />} />
            
            {/* Osnovni marshruty dodatku */}
            <Route path="/about" element={<AboutMe />} />
            <Route path="/my-city" element={<MyCity />} />
            <Route path="/my-future" element={<MyFuture />} />
            
            {/* Obrabka neisnuyuchykh marshrutiv (404 redirect) */}
            <Route path="*" element={<Navigate to="/about" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;