from flask import Flask, jsonify
from external_requests import FinancialDataAPI
import json
import datetime

app = Flask(__name__)



@app.route("/instrument/<valor>/")         
def stock_instrument(valor):
    session = FinancialDataAPI()
    response = session.instrument_summary("VALOR", [valor])
    # print(type(response))
    response_dict = dict(response.__dict__)
    final_response_dict = json.dumps(response_dict, default=lambda o: o.__dict__, indent=4)
    final_response_dict = json.loads(final_response_dict)["data"]["instruments"][0]["referenceData"]["instrumentSummary"]

    
    information = {}
    information["name"] = final_response_dict["issuer"]["name"]
    information["dividend"] = final_response_dict["dividendPolicy"]
    
    bc = final_response_dict["mostLiquidMarket"]["bc"]

    return information, bc

@app.route("/<valor_bc>/")
def stock_prices_over_time(valor_bc, start="2023-01-01", end="2023-02-01", scheme="VALOR_BC"):
    today = str(datetime.datetime.now()).split(" ")[0]
    session = FinancialDataAPI()
    response = session.listing_EoDTimeseries(scheme, [valor_bc], start, today)
    values = {}
    print(response.json())
    print(type(response.json()))
    for day in response.json()["data"]["listings"][0]["marketData"]["eodTimeseries"]:

        if len(day) != 1:
            values[day["sessionDate"]] = day["high"]
        else:
            values[day["sessionDate"]] = 0
    return values