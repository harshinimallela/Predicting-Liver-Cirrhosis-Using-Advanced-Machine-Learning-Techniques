from flask import Flask

app = Flask(__name__)

import pickle
model = pickle.load(open("liver_prediction.pkl","rb"))

@app.route("/")
def hello_world():
    pred=model.predict([[52.0,1,1,8.0,3.0,3,0,6,0,1,13.0,36.0,3.39070351758794,94.0,30.527397260273972,31.901079136690647,7000.0,60.0,20.0,3.0,1.0,1.0,2.45,1.0,2.0,7.1,4.2,2.5,56.0,110.0,1]])
    if pred[0] == 1:
        pred = "Liver Disease Detected"
    else:
        pred = "No Liver Disease Detected"
    return pred

@app.route("/predict")
def predict():
    return "Prediction endpoint is not implemented yet."
if __name__ == "__main__":
    app.run(debug = True)
