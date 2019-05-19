/**
 * UsageProfileToMLModelTransformer
 *
 * Take in user generated usage profile data
 * and return ML Model schema.
 */

const transform = (usageProfile) => {
  /*

  User generated the data in the following schema:
  {
    AIR: false
    BEDROOMS: "5"
    CITY: "San Francisco"
    DECADE_BUILT: "1970"
    GARAGE: false
    HEAT: true
    SOLAR_Boolean: true
    TOTAL_AREA: "1445"
  }

  Which is then transformed into the ML Model schema:
  {
    "CITY": "San Francisco",
    "SOLAR_Boolean": 1,
    "BEDROOMS": 5,
    "GARAGE": 1,
    "HEAT_AIR_COND" 'B',
    "TOTAL_AREA": 1234,
    "TOTAL_ROOMS" 5,
    "DECADE_BUILT": "1970",
  }

  */

  let MLModel = {};

  MLModel['CITY'] = usageProfile.CITY;

  MLModel['SOLAR_Boolean'] = usageProfile.SOLAR_Boolean ? 1 : 0;
  MLModel['GARAGE'] = usageProfile.GARAGE ? 1 : 0;

  MLModel['BEDROOMS'] = usageProfile.BEDROOMS;

  MLModel['BEDROOMS'] = usageProfile.BEDROOMS;
  MLModel['TOTAL_AREA'] = usageProfile.TOTAL_AREA;
  MLModel['TOTAL_ROOMS'] = usageProfile.TOTAL_ROOMS;
  MLModel['DECADE_BUILT'] = usageProfile.DECADE_BUILT;

  if (usageProfile.AIR === true && usageProfile.HEAT === true) {
    MLModel['HEAT_AIR_COND'] = 'B';
  } else if (usageProfile.HEAT === true) {
    MLModel['HEAT_AIR_COND'] = 'H';
  } else if (usageProfile.AIR === true) {
    MLModel['HEAT_AIR_COND'] = 'A';
  } else {
    MLModel['HEAT_AIR_COND'] = 'N';
  }

  MLModel['Advanced_Vehicle_Fuel'] = 'none';

  return usageProfile;
}

module.exports = { transform }
