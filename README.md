<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--   <title>TempTracker README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      padding: 20px;
      max-width: 800px;
      margin: auto;
    }
    h1, h2, h3 { -->
<!--       color: #333;
    }
    ul {
      list-style-type: disc;
      margin-left: 20px;
    }
    code {
      background-color: #f4f4f4;
      padding: 2px 4px;
      border-radius: 4px;
    }
  </style> -->
</head>
<body>
   <h1>10 Best React Projects</h1>
  <h2> 1. TempTracker</h1>
  <p>TempTracker is a simple and beautiful weather application that allows users to check the current weather details for any city. Built with React and integrated with the WeatherAPI, TempTracker provides users with real-time weather information.</p>

  <h2>Features</h2>
  <ul>
    <li>Search for current weather by city name</li>
    <li>Display detailed weather information including:</li>
    <ul>
      <li>Place name</li>
      <li>Date and time</li>
      <li>Temperature (Celsius and Fahrenheit)</li>
      <li>Precipitation</li>
      <li>Humidity</li>
      <li>Wind speed</li>
      <li>UV Index</li>
      <li>Weather icon</li>
    </ul>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li>React</li>
    <li>Axios for API requests</li>
    <li>Tailwind CSS for styling</li>
    <li>WeatherAPI for weather data</li>
  </ul>

  <h2>Getting Started</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js and npm installed</li>
    <li>WeatherAPI key</li>
  </ul>

  <h3>Installation</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/your-username/temptracker.git
cd temptracker</code></pre>
    </li>
    <li>Install the dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file in the root directory and add your WeatherAPI key:
      <pre><code>VITE_WEATHER_KEY=your_api_key_here</code></pre>
    </li>
    <li>Start the development server:
      <pre><code>npm run dev</code></pre>
    </li>
    <li>Open your browser and go to <code>http://localhost:5173</code> to see the app in action.</li>
  </ol>

  <h2>Usage</h2>
  <ol>
    <li>Enter the name of the city in the input field.</li>
    <li>Click the "Check Current Weather" button.</li>
    <li>The app will display the current weather details for the specified city.</li>
  </ol>

  <h2>Code Structure</h2>
  <ul>
    <li><code>src/App.jsx</code>: Main component containing the weather search functionality and UI.</li>
    <li><code>src/App.css</code>: Custom CSS for styling the application.</li>
  </ul>

  <h2>Contributing</h2>
  <p>Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.</p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>

  <h2>Acknowledgments</h2>
  <p><a href="https://www.weatherapi.com/">WeatherAPI</a> for providing the weather data.</p>

</body>
</html>
