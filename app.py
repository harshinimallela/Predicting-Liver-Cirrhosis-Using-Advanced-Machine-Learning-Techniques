from flask import Flask,render_template,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app,origins=["*"])  # This enables CORS for all routes
import pickle
model = pickle.load(open("liver_prediction.pkl","rb"))

@app.route("/")
def hello_world():
    
    return "<h1>Welcome to Liver Disease Prediction API</h1>"

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

