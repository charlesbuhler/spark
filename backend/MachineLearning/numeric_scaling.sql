SELECT
  input, min, max, mean, stddev
FROM
  ml.FEATURE_INFO(MODEL svce_usage.simple_kwh_model) AS model
