SELECT * FROM
ML.PREDICT(
  MODEL `svce_usage.simple_kwh_model`, # Model name
  # Table to evaluate against
  (
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
    round_kwh # don't forget to include prediction input in training data

  FROM
    `decent-ellipse-241015.svce_usage.svce_usage_table`
  WHERE
    round_kwh IS NOT NULL
  )
)
LIMIT 100
