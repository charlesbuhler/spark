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

const getUsagePercentile = usageProfile => {
  if (!validateSchema(usageProfile)) {
    return "Missing data."
  }

  const MLModelData = transform(usageProfile);

  // Returning mock percentile data until ML model connected.
  return 98.0;
}

module.exports = { getUsagePercentile }
