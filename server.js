const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for frontend communication

// Dummy weather data
const weatherData = {
  pretoria: { temperature: 23, description: 'Warm' },
  'cape town': { temperature: 14, description: 'Cool' },
  durban: { temperature: 21, description: 'Warm' },
  bloemfontein: { temperature: -1, description: 'Cold' },
  gqeberha: { temperature: 7, description: 'Cool' },
  kimberly: { temperature: 21, description: 'Warm' },
  mbombela: { temperature: 8, description: 'Cold' },
  rustenburg: { temperature: 11, description: 'Cold' },
};

// API to fetch weather by city
app.get('/weather/:city', (req, res) => {
  const city = req.params.city.toLowerCase();
  const weather = weatherData[city];

  if (weather) {
    res.json(weather);
  } else {
    res.json({ error: 'Weather information not available for this city.' });
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
