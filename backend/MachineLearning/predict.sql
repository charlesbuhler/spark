SELECT * FROM
ML.PREDICT(
  MODEL `svce_usage.simple_thrm_model`, # Model name
  # Table to evaluate against
  (
  SELECT
    'MOUNTAIN VIEW' as CITY,
    0 as SOLAR_Boolean,
    3 as BEDROOMS,
    0 as GARAGE,
    'B' as HEAT_AIR_COND,
    2500 as TOTAL_AREA,
    13 as TOTAL_ROOMS,
    2000 as DECADE_BUILT,
    'none' as Advanced_Vehicle_Fuel,
    round_thrm # don't forget to include prediction input in training data

  FROM
    `decent-ellipse-241015.svce_usage.svce_usage_table`
  WHERE
    round_thrm IS NOT NULL
  )
)
LIMIT 5

