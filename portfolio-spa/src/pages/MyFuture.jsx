import React from 'react';

// Storinka "Miy rozvytok"
const MyFuture = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Мій розвиток та плани 🌱</h1>
        
        <h3>3 кроки в майбутнє:</h3>
        <ol>
          <li>Opanuvaty hlyboki kontseptsiyi React (Redux, Next.js).</li>
          <li>Zdobuty dosvid u backend-rozrobtsi (Node.js abo C++).</li>
          <li>Znahyty pershu robotu yak Junior Frontend Developer.</li>
        </ol>

        <blockquote style={{ borderLeft: '4px solid var(--primary-color)', paddingLeft: '10px', fontStyle: 'italic' }}>
          "Єдиний спосіб робити великі справи — любити те, що ти робиш." — Стів Джобс
        </blockquote>

        <h3>Робота мрії</h3>
        <p>Full-stack розробник у продуктовій компанії, де я зможу створювати корисні додатки з продуманим інтерфейсом та складною логікою на бекенді, використовуючи сучасні підходи розробки.</p>
      </div>
    </div>
  );
};

export default MyFuture;