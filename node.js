// Inside the weather API endpoint
app.get('/weather/:city', (req, res) => {
  const city = req.params.city.toLowerCase();
  console.log(`Fetching weather for: ${city}`);
  const weather = weatherData[city];
  ...
});
