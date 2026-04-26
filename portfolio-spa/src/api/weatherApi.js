import axios from 'axios';

// Funktsiya dlya zapytu do bezkoshtovnogo API pogody
export const fetchWeather = async (lat = 50.45, lon = 30.52) => {
  try {
    // Zapyt na Open-Meteo (Kyiv za zamovchuvannyam)
    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    );
    return response.data.current_weather;
  } catch (error) {
    // Obrobka pomylky z yednannyam
    console.error("Pomylka zapyty API:", error);
    return null;
  }
};