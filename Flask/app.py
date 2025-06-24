from flask import Flask,render_template,request,jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
import os

ADMIN_EMAIL = os.environ.get("ADMIN_EMAIL", "thathieswarreddy@gmail.com")
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "fmtb mbzy xidg vpql")  # Use app password for Gmail

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
    

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()

        user_name = data.get('name')
        user_email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        print(f"name: {user_name} \n email: { user_email} \n subject: { subject} \n message: {message}")
        # Compose email to admin (yourself)
        email_message = EmailMessage()
        email_message['Subject'] = f"Liver Cirrhosis Contact {subject}"
        email_message['From'] = ADMIN_EMAIL
        email_message['To'] = ADMIN_EMAIL  # Send it to yourself
        email_message.set_content(f"""
        You received a new message from the contact form:

        Name: {user_name}
        Email: {user_email}
        Subject: {subject}

        Message:
        {message}
        """)

        # Send via Gmail SMTP
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(ADMIN_EMAIL, ADMIN_PASSWORD)
            smtp.send_message(email_message)

        return jsonify({'message': 'Message sent successfully!'}), 200

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'message': 'Failed to send message'}), 500
    

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)

