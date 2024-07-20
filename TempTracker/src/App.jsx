import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // define state for changing place name
  const [place, setPlace] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const my_api_key = import.meta.env.VITE_WEATHER_KEY;
  // handle place input
  const placeChange = (e) => {
    setPlace(e.target.value);

  }

  //handle to submit the place
  const submitPlace = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json`, {
        params: {
          key: my_api_key,
          q: place,
          aqi: 'no'
        }
      });
      console.log(response.data);
      setWeatherData(response.data);
      setError(null); // Clear any previous errors
      setPlace("");
    } catch (error) {
      setWeatherData(null); // Clear any previous weather data
      setError('Failed to fetch weather data'); // Set a user-friendly error message
    }
   
  };

  return (
    <>
      <div className="bg-blue-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-center mb-6">
            <h1 className="text-4xl logo-font text-blue-500">TempTracker</h1>
          </div>
          <div className="mb-4">
            <input onChange={placeChange} value={place} type="text" placeholder="Enter city name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="text-center mb-4">
            <button onClick={submitPlace} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Check Current Weather</button>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {weatherData && (
            <div id="temperatureDisplay" className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800">Weather Details</h2>
              <div className="mt-4">
                <p className="text-lg text-gray-700"><span className="font-bold">Place:</span> <span id="place">{weatherData.location.name}</span></p>
                <p className="text-lg text-gray-700"><span className="font-bold">Date & Time:</span> <span id="dateTime">{weatherData.location.localtime}</span></p>
                <div className="flex items-center mt-4">
                  <img id="weatherIcon" src={weatherData.current.condition.icon} alt="Weather Icon" className="w-24 h-24 mr-4" />
                  <div>
                    <p className="text-lg text-gray-700"><span className="font-bold">Temperature:</span> <span id="tempC">{weatherData.current.temp_c} C</span> | <span id="tempF">{weatherData.current.temp_f} F</span></p>
                    <p className="text-lg text-gray-700"><span className="font-bold">Precipitation:</span> <span id="precipitation">{weatherData.current.precip_mm}%</span></p>
                    <p className="text-lg text-gray-700"><span className="font-bold">Humidity:</span> <span id="humidity">{weatherData.current.humidity}%</span></p>
                    <p className="text-lg text-gray-700"><span className="font-bold">Wind:</span> <span id="wind">{weatherData.current.wind_kph}</span></p>
                    <p className="text-lg text-gray-700"><span className="font-bold">UV Index:</span> <span id="uvIndex">{weatherData.current.uv}</span></p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default App
