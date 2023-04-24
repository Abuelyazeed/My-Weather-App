import React, { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "d403a3476ecdac8bed27848b413064e9";

  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = async (event) => {
    if (event.key === "Enter") {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      // console.log(response);
      const data = await response.json();
      //console.log(data);
      setWeatherData(data);
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };
  return (
    <div className="container-fluid">
      <div className="input-group input-group-lg">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city..."
          aria-label="Enter city..."
          aria-describedby="basic-addon1"
          onChange={handleChange}
          value={city}
          onKeyDown={getWeather}
        />
      </div>

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p className="title">
            Welcome to my Weather App. Please enter a city name!
          </p>
        </div>
      ) : (
        <div>
          <p className="city">{weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp)}</p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default App;
