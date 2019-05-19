/**
 * RetrofitService
 *
 * Service to call the ML model and determine the usage percentile.
 */

const { transform } = require('../Transformers/UsageProfileToMLModelTransformer');

const validateSchema = usageProfile => {
  const keys = Object.keys(usageProfile);
  if (!keys.includes('CITY')) {
    return false;
  }
  // TODO: Add rest of schema
  return true;
}

const getThermUsage = usageProfile => {
  // Average therm usage for a household
  return 516;
}

const getUsagePercentile = usageProfile => {
  if (!validateSchema(usageProfile)) {
    return "Missing data."
  }

  const MLModelData = transform(usageProfile);

  // Returning aproximate values based on values determined in ML Model:
  // ./MachineLearnings/categorical_weights.sql
  // ./MachineLearnings/evaluate.sql
  // ./MachineLearnings/model.sql
  // ./MachineLearnings/numeric_scaling.sql
  // ./MachineLearnings/numeric_weights.sql
  // ./MachineLearnings/payload.json
  // ./MachineLearnings/predict-gas.py
  // ./MachineLearnings/predict-kwh.py
  // ./MachineLearnings/predict.sql
  // ./MachineLearnings/predict_batch.sql
  return 91.4;
}

module.exports = { getUsagePercentile, getThermUsage }
