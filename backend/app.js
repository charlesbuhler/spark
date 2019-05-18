const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { getUsagePercentile } = require('./Services/RetrofitService');
const { getRecomendations } = require('./Services/RecommendationService');

const app = express()
const port = 8080

// parse application/json
app.use(bodyParser.json())
app.use(cors());

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true)
  }
}

app.get('/', cors(corsOptions), (req, res) => res.send('Spark is live!'))

/**
 * Kick of a Retrofit by generating a retrofit id
 *
 * Steps:
 * Create a random retrofit id
 * Check that id has not been used for a previous retrofit
 * Return the retrofit id
 */
app.get('/start-retrofit', cors(corsOptions), (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const retrofitId = Math.floor(Math.random()*90000) + 10000;
  const startRetrofitResponse = { retrofitId };

  res.send(startRetrofitResponse)
});

/**
 * Add home info to model
 *
 */
 app.get('/update-home-info', cors(corsOptions), (req, res) => {
   res.status(200).send('OK');
 });

/**
 * Add appliance info to model
 *
 */
 app.get('/use-appliance-info', cors(corsOptions), (req, res) => {
   res.status(200).send('OK');
 });

/**
 * Given a retrofit id that coresponds to a retrofit model,
 * get a list of recommendations.
 *
 */
 app.get('/get-retrofit-recommendations', cors(corsOptions), (req, res) => {
   res.setHeader('Content-Type', 'application/json');

   const recomendation1 = {"name": "hot-water-heater-upgrade", "message": "electrify your hot water heater.", "annual-savings": 200};
   const recomendations = [
     recomendation1
   ];

   res.send(recomendations);
 });

 /**
  * Determine the viability of the retrofit by seeing what energy usage
  * percentile a homeowner is in.
  *
  */
app.post('/retrofit-viability', cors(corsOptions), (req, res) => {
  const requestPayload = req.body;

  if (!requestPayload) {
    res.status(400).send({'message': 'Missing data'});
    return;
  }

  const usagePercentilePayload = {
    'usagePercentile': getUsagePercentile(requestPayload)
  }

  res.status(200).send(usagePercentilePayload);
});

/**
 * Get recomendations on what to retrofit given the applience profile
 * in a homeowner's home.
 *
 */
app.post('/get-recommendations', cors(corsOptions), (req, res) => {
  const requestPayload = req.body;

  if (!requestPayload) {
    res.status(400).send({'message': 'Missing data'});
    return;
  }

  const usagePercentilePayload = 97;//getRecomendations(requestPayload)

  res.status(200).send(usagePercentilePayload);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
