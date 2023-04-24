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
      <div className="input-group mb-3">
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
          <p>Welcome to my weather app</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
        </div>
      )}
    </div>
  );
}

export default App;
