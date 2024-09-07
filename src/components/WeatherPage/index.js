// src/components/WeatherPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const WeatherPage = () => {
  const { cityName } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = '197f57dbe9c98e63fac379d029b966eb'; // Replace with your API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [cityName, API_KEY]);

  if (!weatherData) return <div>Loading weather data...</div>;

  return (
    <div>
      <h2>Weather in {weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Atmospheric Pressure: {weatherData.main.pressure} hPa</p>
      {/* Display more weather data as needed */}
    </div>
  );
};

export default WeatherPage;
