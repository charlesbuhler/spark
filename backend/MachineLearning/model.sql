# Provide name of model
CREATE OR REPLACE MODEL `svce_usage.simple_thrm_model`
# Specify options
# do logistic regression to predict a category
OPTIONS
  (model_type='linear_reg',
    input_label_cols=['round_thrm']) AS
# Provide training data
SELECT
  CITY,
  SOLAR_Boolean,
  BEDROOMS,
  GARAGE,
  HEAT_AIR_COND,
  TOTAL_AREA,
  TOTAL_ROOMS,
  DECADE_BUILT,
  Advanced_Vehicle_Fuel,
  round_thrm # don't forget to include prediction input in training data
FROM
  `decent-ellipse-241015.svce_usage.svce_usage_table`
WHERE
  round_thrm IS NOT NULL # Filter for rows containing data we want to predict. 
