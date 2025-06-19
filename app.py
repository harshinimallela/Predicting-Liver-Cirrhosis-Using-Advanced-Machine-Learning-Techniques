from flask import Flask,render_template,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app,origins=["*"])  # This enables CORS for all routes
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

@app.route("/api/predict",methods=['GET', 'POST'])
def predict():
    if request.method =='POST':
        data = request.get_json()   # to get the data from the request
        print(data)
        
        prediction = model.predict([data])
        prediction = int(prediction[0])
        if prediction==0:
            pred = "No Liver Disease Detected"
            
        else:
            pred = "Liver Disease Detected"
            

        print(pred)
        return jsonify({'message': pred})
    
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)

