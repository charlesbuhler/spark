def compute_prediction(rowdict, numeric_weights, scaling_dfs, categorical_weights):
  input_values = rowdict
  # numeric inputs
  pred = 0
  for column in numeric_weights:
    # print(column)
    column_name = column['input']
    wt = column['input_weight']
    if wt is not None:
      # wt = numeric_weights[ numeric_weights['input'] == column_name ]['input_weight'].values[0]
      if column_name != '__INTERCEPT__':
        for scaling_df in scaling_dfs:
          if scaling_df['input'] == column_name:
            # print(scaling_df)
            meanv = float(scaling_df['mean'])
            stddev = float(scaling_df['stddev'])
            scaled_value = (input_values[column_name] - meanv)/stddev
      else:
        scaled_value = 1.0
      contrib = float(wt) * scaled_value
      pred = pred + contrib
  # categorical inputs
  for categorical_weight in categorical_weights:
    # print(column)
    column_name = categorical_weight['input']
    if input_values[column_name] == categorical_weight['category_name']:
      # print(categorical_weight)
      wt = float(categorical_weight['category_weight'])
      # category_weights = categorical_weights[ categorical_weights['input'] == column_name ]
      # wt = category_weights[ category_weights['category_name'] == input_values[column_name] ]['category_weight'].values[0]
      pred = pred + wt
  return pred
#numeric_weights.sql 
numeric_weights = [
  {
    "input": "CITY",
    "input_weight": None
  },
  {
    "input": "SOLAR_Boolean",
    "input_weight": "23.759163729567536"
  },
  {
    "input": "BEDROOMS",
    "input_weight": "-35.81847610315959"
  },
  {
    "input": "GARAGE",
    "input_weight": "39.55030766744839"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None
  },
  {
    "input": "TOTAL_AREA",
    "input_weight": "0.17720231251820073"
  },
  {
    "input": "TOTAL_ROOMS",
    "input_weight": "-15.531179694345408"
  },
  {
    "input": "DECADE_BUILT",
    "input_weight": "-2.0532774883027085"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "input_weight": None
  },
  {
    "input": "__INTERCEPT__",
    "input_weight": "-32781.995860396666"
  }
]

#numeric_scaling.sql
scaling_df = [
  {
    "input": "CITY",
    "min": None,
    "max": None,
    "mean": None,
    "stddev": None
  },
  {
    "input": "SOLAR_Boolean",
    "min": "0.0",
    "max": "1.0",
    "mean": "0.12752613240418026",
    "stddev": "0.33356588579580626"
  },
  {
    "input": "BEDROOMS",
    "min": "0.0",
    "max": "5.0",
    "mean": "3.438166711337449",
    "stddev": "0.8891321129081423"
  },
  {
    "input": "GARAGE",
    "min": "0.0",
    "max": "1.0",
    "mean": "0.9625301527740616",
    "stddev": "0.1899126758661434"
  },
  {
    "input": "HEAT_AIR_COND",
    "min": None,
    "max": None,
    "mean": None,
    "stddev": None
  },
  {
    "input": "TOTAL_AREA",
    "min": "250.0",
    "max": "5000.0",
    "mean": "1905.9233449477372",
    "stddev": "858.3084040008774"
  },
  {
    "input": "TOTAL_ROOMS",
    "min": "0.0",
    "max": "8.0",
    "mean": "6.910854998659879",
    "stddev": "1.255159057747929"
  },
  {
    "input": "DECADE_BUILT",
    "min": "1900.0",
    "max": "2010.0",
    "mean": "1967.8273921200787",
    "stddev": "21.52342640699763"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "min": None,
    "max": None,
    "mean": None,
    "stddev": None
  }
]

categorical_weights = [
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "MORGAN HILL",
    "category_weight": "12446.831056732457"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "UNINCORPORATED",
    "category_weight": "12473.869453325358"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "CUPERTINO",
    "category_weight": "12394.714674461637"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "SUNNYVALE",
    "category_weight": "12414.911686407799"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "SARATOGA",
    "category_weight": "12478.724751863645"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "LOS GATOS",
    "category_weight": "12495.66593113208"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "GILROY",
    "category_weight": "12431.209370025863"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "CAMPBELL",
    "category_weight": "12396.120572376585"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "LOS ALTOS HILLS",
    "category_weight": "12658.123956409723"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "MOUNTAIN VIEW",
    "category_weight": "12519.854132957384"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "MILPITAS",
    "category_weight": "12393.163044090092"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "LOS ALTOS",
    "category_weight": "12510.026579461693"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "MONTE SERENO",
    "category_weight": "12633.928502879662"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None,
    "category_name": "A",
    "category_weight": "27615.8834587719"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None,
    "category_name": "B",
    "category_weight": "27564.474784933947"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None,
    "category_name": "",
    "category_weight": "27593.157556270096"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None,
    "category_name": "N",
    "category_weight": "27545.544678716127"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None,
    "category_name": "H",
    "category_weight": "27604.06965986067"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "input_weight": None,
    "category_name": "HYBRID GAS",
    "category_weight": "-2889.5289391884794"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "input_weight": None,
    "category_name": "none",
    "category_weight": "-2870.5147239355592"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "input_weight": None,
    "category_name": "ELECTRIC",
    "category_weight": "-2772.8081576753107"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "input_weight": None,
    "category_name": "PHEV",
    "category_weight": "-2728.127434611791"
  }
]

def hello_world(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    print(request)
    request_json = request.get_json()
    print(request_json)
    if request_json and 'message' in request_json:
        return request_json['message']
    return str(compute_prediction(request_json, numeric_weights, scaling_df, categorical_weights))

