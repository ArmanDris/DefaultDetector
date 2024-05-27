from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import random

# CUSTOMER MAPPER USED IN ML MODEL
from sklearn.base import BaseEstimator, TransformerMixin
class CustomMapper(BaseEstimator, TransformerMixin):
    def __init__(self):
        # Order is: unknown, unknown, other, high-school, university, grad-school
        self.mapping = {0: 0, 5: 1, 6: 2, 4: 3, 3: 4, 2: 5, 1: 6}

    def fit(self, X, y=None):
        return self

    def transform(self, X):
        return X.apply(lambda col: col.map(self.mapping))

def load_model(path):
    # Make sure the CustomMapper class is in the globals
    globals()['CustomMapper']
    return joblib.load(path)

cat_boost_model = load_model('model_building/cat_boost_predictor.joblib')

cat_boost_model = joblib.load('model_building/cat_boost_predictor.joblib')

app = Flask(__name__, static_folder='ui/build', static_url_path='')
CORS(app)

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

@app.route('/')
@app.route('/<path:path>')
def serve(path='index.html'):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run()

