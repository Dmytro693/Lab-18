import React from 'react';

// Storinka "Pro mene" z perelikom proyektiv
const AboutMe = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Привіт, я розробник! 👋</h1>
        <p>Я початківець у сфері веб-розробки. Захоплююсь створенням зручних інтерфейсів, вивчаю алгоритми та сучасні фреймворки.</p>
        
        <h3>Цінності та захоплення</h3>
        <ul>
          <li>📚 Postiyne navchannya ta samorozvytok</li>
          <li>💻 Napysannya chystogo ta zrozumilogo kodu</li>
          <li>🎨 Rozrobka UI/UX z vykorystannyam glassmorphism</li>
        </ul>
      </div>

      <div className="card">
        <h2>Мої проєкти</h2>
        
        <h3>HTML + CSS</h3>
        <ul>
          <li><a href="https://github.com/your-link" target="_blank" rel="noreferrer">Landing Page (Адаптивна верстка)</a></li>
        </ul>

        <h3>JavaScript</h3>
        <ul>
          <li><a href="https://github.com/your-link" target="_blank" rel="noreferrer">Web-калькулятор (Glassmorphism UI)</a></li>
        </ul>

        <h3>React</h3>
        <ul>
          <li><a href="https://github.com/your-link" target="_blank" rel="noreferrer">SPA Портфоліо (Цей проєкт)</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;