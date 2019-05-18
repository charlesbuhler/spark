/*


Reuqest schema


ENUM: GAS, ELECTRIC, OTHER

{
  "stove": "GAS",
  "waterHeater": "ELECTRIC",
  "dryer" "OTHER":
}

*/

const RECOMMENDATION_LIST = {
  STOVE: {
    'action': "Get an induction stove",
    'recommendation': "Not your grandma's electric stove. Induction is precise, heats twice as fast as a gas stove and is safer for your health."
  },
  HEAT_PUMP: {
    'action': "Heat your water with a heat pump",
    'recommendation': "Super efficient collects heat from the surrounding air and has comparable costs to a gas water heater."
  },
  DRYER: {
    'action': "Upgrade your Dryer to electric",
    'recommendation': "Eliminate combustion, and its byproducts within the home."
  }
}

const getRecomendations = (gasElectricProfile) => {
  let recommendations = [];

  if (gasElectricProfile.stove !== 'ELECTRIC') {
    recommendations.push(RECOMMENDATION_LIST.STOVE);
  }
  if (gasElectricProfile.waterHeater !== 'ELECTRIC') {
    recommendations.push(RECOMMENDATION_LIST.HEAT_PUMP);
  }
  if (gasElectricProfile.dryer !== 'ELECTRIC') {
    recommendations.push(RECOMMENDATION_LIST.DRYER);
  }

  return recommendations;
}

module.exports = { getRecomendations }
