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
    "input_weight": "-4400.262854781561"
  },
  {
    "input": "BEDROOMS",
    "input_weight": "21.663327108024127"
  },
  {
    "input": "GARAGE",
    "input_weight": "71.3881121098157"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None
  },
  {
    "input": "TOTAL_AREA",
    "input_weight": "1.8672426300354732"
  },
  {
    "input": "TOTAL_ROOMS",
    "input_weight": "53.2587962334325"
  },
  {
    "input": "DECADE_BUILT",
    "input_weight": "-14.770132350257894"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "input_weight": None
  },
  {
    "input": "__INTERCEPT__",
    "input_weight": "1091525.4860578172"
  }
]


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
    "mean": "0.12184459777996959",
    "stddev": "0.32710974408983934"
  },
  {
    "input": "BEDROOMS",
    "min": "0.0",
    "max": "5.0",
    "mean": "3.3573265332361757",
    "stddev": "0.927854840663153"
  },
  {
    "input": "GARAGE",
    "min": "0.0",
    "max": "1.0",
    "mean": "0.9494064200917113",
    "stddev": "0.21916865404139227"
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
    "mean": "1855.2318604551401",
    "stddev": "861.3101303890539"
  },
  {
    "input": "TOTAL_ROOMS",
    "min": "0.0",
    "max": "8.0",
    "mean": "6.79036129087556",
    "stddev": "1.3188875475938107"
  },
  {
    "input": "DECADE_BUILT",
    "min": "1900.0",
    "max": "2010.0",
    "mean": "1967.8637551965007",
    "stddev": "21.44553113965163"
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
    "category_name": "CAMPBELL",
    "category_weight": "-762443.070576205"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "SUNNYVALE",
    "category_weight": "-763238.5668035392"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "CUPERTINO",
    "category_weight": "-763502.6202642404"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "MONTE SERENO",
    "category_weight": "-760495.3101177291"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "LOS GATOS",
    "category_weight": "-761966.6679052855"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "LOS ALTOS",
    "category_weight": "-762275.0917412344"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "MOUNTAIN VIEW",
    "category_weight": "-763273.4380936241"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "MORGAN HILL",
    "category_weight": "-761974.1408800203"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "UNINCORPORATED",
    "category_weight": "-761760.7470748733"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "SARATOGA",
    "category_weight": "-762228.2363155409"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "MILPITAS",
    "category_weight": "-763048.3542720196"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "LOS ALTOS HILLS",
    "category_weight": "-761323.141604256"
  },
  {
    "input": "CITY",
    "input_weight": None,
    "category_name": "GILROY",
    "category_weight": "-762248.7060394154"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None,
    "category_name": "A",
    "category_weight": "3643.303095138682"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None,
    "category_name": "B",
    "category_weight": "3478.4719225285808"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None,
    "category_name": "",
    "category_weight": "3748.7436208991494"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None,
    "category_name": "H",
    "category_weight": "3441.673706850961"
  },
  {
    "input": "HEAT_AIR_COND",
    "input_weight": None,
    "category_name": "N",
    "category_weight": "3614.53661207838"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "input_weight": None,
    "category_name": "ELECTRIC",
    "category_weight": "-299065.2340946223"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "input_weight": None,
    "category_name": "HYBRID GAS",
    "category_weight": "-300744.1792245825"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "input_weight": None,
    "category_name": "none",
    "category_weight": "-300755.16369918047"
  },
  {
    "input": "Advanced_Vehicle_Fuel",
    "input_weight": None,
    "category_name": "PHEV",
    "category_weight": "-299360.65273015643"
  }
]

row_dict = {
  'CITY': 'MOUNTAIN VIEW',
  'SOLAR_Boolean': 0,
  'BEDROOMS': 3,
  'GARAGE': 0,
  'HEAT_AIR_COND': 'B',
  'TOTAL_AREA': 2500,
  'TOTAL_ROOMS': 13,
  'DECADE_BUILT': 2000,
  'Advanced_Vehicle_Fuel': 'none'
}

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

