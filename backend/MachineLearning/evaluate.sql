SELECT * FROM
ML.EVALUATE(
  MODEL `svce_usage.simple_thrm_model`, # Model name
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
    round_thrm # don't forget to include prediction input in training data

  FROM
    `decent-ellipse-241015.svce_usage.svce_usage_table`
  WHERE
    round_thrm IS NOT NULL
  )
)

