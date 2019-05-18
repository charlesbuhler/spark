/**
 * RetrofitService
 *
 * Service to call the ML model and determine the usage percentile.
 */

// Front end will send the following schema:

/*
AIR: false
BEDROOMS: "5"
CITY: "San Francisco"
DECADE_BUILT: "1970"
GARAGE: false
HEAT: true
SOLAR_Boolean: true
TOTAL_AREA: "1445"
*/

// Needs to be serialized into backend model here:

 // H heat B both A air-conditioning, N neither
 //
// {
// "CITY": "San Francisco",
// "SOLAR_Boolean": 1,
// "BEDROOMS": 5,
// "GARAGE": 1,
// "HEAT_AIR_COND" 'B',
// "TOTAL_AREA": 1234,
// "TOTAL_ROOMS" 5,
// "DECADE_BUILT": "1970",
// }


const getUsagePercentile = (usageProfile) => {
  // Returning mock percentile data until ML model connected.
  return 98.0;
}

module.exports = { getUsagePercentile }
