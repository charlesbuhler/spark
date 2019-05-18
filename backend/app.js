const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Spark is live!'))

/**
 * Kick of a Retrofit by generating a retrofit id
 *
 * Steps:
 * Create a random retrofit id
 * Check that id has not been used for a previous retrofit
 * Return the retrofit id
 */
app.get('/start-retrofit', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const retrofitId = Math.floor(Math.random()*90000) + 10000;
  const startRetrofitResponse = { retrofitId };

  res.send(startRetrofitResponse)
});

/**
 * Add home info to model
 *
 */
 app.get('/update-home-info', (req, res) => {
   res.status(200).send('OK');
 });

/**
 * Add appliance info to model
 *
 */
 app.get('/use-appliance-info', (req, res) => {
   res.status(200).send('OK');
 });

/**
 * Given a retrofit id that coresponds to a retrofit model,
 * get a list of recommendations.
 *
 */
 app.get('/get-retrofit-recommendations', (req, res) => {
   res.setHeader('Content-Type', 'application/json');

   const recomendation1 = {"name": "hot-water-heater-upgrade", "message": "electrify your hot water heater.", "annual-savings": 200};
   const recomendations = [
     recomendation1
   ];

   res.send(recomendations);
 });

 /**
  * CITY,
  * SOLAR_Boolean,
  * BEDROOMS,
  * GARAGE,
  * HEAT_AIR_COND,
  * TOTAL_AREA,
  * TOTAL_ROOMS,
  * DECADE_BUILT,
  * Advanced_Vehicle_Fuel,
  *
  */
  app.post('/retrofit-viability', (req, res) => {
    const requestPayload = req.body;

    if (!requestPayload) {
      res.status(400).send({'message': 'Missing data'});
      return;
    }

    const percentileOfUsage = {
      'usagePercentile': 98.0
    }

    res.status(200).send(percentileOfUsage);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))