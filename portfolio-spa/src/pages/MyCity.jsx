import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherApi';

// Storinka "Moye misto" z API zapytom pogody
const MyCity = () => {
  // Zminni stanu dlya zberezhennya danykh ta statusu zavantazhennya
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  // Vyklyk API pry montuvanni komponenta
  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchWeather(50.45, 30.52); // Koordynaty Kyieva
      setWeather(data);
      setLoading(false);
    };
    
    getWeather();
  }, []); // Porozhniy masyv zalezhnostej - zapusk odyn raz

  return (
    <div className="container">
      <div className="card">
        <h1>Київ, Україна 🇺🇦</h1>
        <p>Київ — столиця та найбільше місто України, розташоване на річці Дніпро. Місто має багату історію, видатну архітектуру та є центром технологічного розвитку країни.</p>
      </div>

      <div className="card">
        <h2>Поточна погода</h2>
        {loading ? (
          <p>// Zavantazhennya danykh z API...</p>
        ) : weather ? (
          <div>
            <p><strong>Температура:</strong> {weather.temperature}°C</p>
            <p><strong>Швидкість вітру:</strong> {weather.windspeed} км/год</p>
            <p><strong>Координати:</strong> Широта 50.45, Довгота 30.52</p>
          </div>
        ) : (
          <p>Помилка завантаження даних про погоду.</p>
        )}
      </div>
    </div>
  );
};

export default MyCity;