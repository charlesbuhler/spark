SELECT
  processed_input AS input,
  model.weight AS input_weight,
  category.category AS category_name,
  category.weight AS category_weight
FROM
  ml.WEIGHTS(MODEL `svce_usage.simple_kwh_model`) AS model,
  UNNEST(category_weights) AS category
