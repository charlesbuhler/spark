/**
 * RetrofitService
 *
 * Service to call the ML model and determine the usage percentile.
 */

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
  return 98.0;
}

module.exports = { getUsagePercentile }
