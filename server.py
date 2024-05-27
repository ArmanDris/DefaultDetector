from flask import Flask, request, jsonify
from flask_cors import CORS
from model_building.custom_mapper import CustomMapper
import joblib
import pandas as pd
import random

app = Flask(__name__)
CORS(app)

cat_boost_model = joblib.load('model_building/cat_boost_predictor.joblib')

@app.route("/", methods=["GET", "POST"])
def index():
    return "Hello, i am the backend"

@app.route("/getSample", methods=["GET"])
def getSampleClients():
    # Get 10 random rows
    header = pd.read_csv('model_building/data/UCI_Credit_Card.csv', nrows=1)
    sample = pd.read_csv('model_building/data/UCI_Credit_Card.csv', skiprows=random.randint(0, 5000), nrows=10, header=None)
    sample.columns = header.columns
    return sample.to_html()

@app.route('/predict', methods=["POST"])
def moment_prediction():
    data = request.get_json()
    df = pd.read_html(data['customersTable'])[0]
    predictions = cat_boost_model.predict(df).tolist()
    ids = df['ID'].tolist()
    answers = df['default.payment.next.month'].tolist()
    body = {
        'ids': ids,
        'answers': answers,
        'predictions': predictions,
    }
    return body

if __name__ == '__main__':
    app.run()
