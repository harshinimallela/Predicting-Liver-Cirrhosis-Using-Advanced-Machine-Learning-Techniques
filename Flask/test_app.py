import unittest
import json
import csv
import pandas as pd
from app import app  # Make sure your Flask app is in app.py

class LiverDiseasePredictionTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.client = app.test_client()

        # Load dataset
        df = pd.read_csv("cleaned_data.csv")

        # Only keep the first 31 input features
        cls.input_features = df.columns[:31]  # Exclude last 2 columns
        cls.test_data = df[cls.input_features].iloc[900:].values.tolist()  # First 5 rows

        # Prepare CSV file to log results
        cls.output_file = "test_results.csv"
        with open(cls.output_file, mode='w', newline='') as file:
            writer = csv.writer(file)
            writer.writerow(list(cls.input_features) + ["Prediction"])  # CSV header

    def test_prediction_api(self):
        for i, row in enumerate(self.test_data):
            with self.subTest(i=i):
                response = self.client.post(
                    "/api/predict",
                    data=json.dumps(row),
                    content_type='application/json'
                )

                self.assertEqual(response.status_code, 200)

                data = response.get_json()
                result = data['message']
                print(f"Test case {i+1}: {data['message']}")

                self.assertIn(data['message'], [
                    "Liver Disease Detected", 
                    "No Liver Disease Detected"
                ])

                # Log the test input and result to CSV
                with open(self.output_file, mode='a', newline='') as file:
                    writer = csv.writer(file)
                    writer.writerow(list(row) + [result])

if __name__ == '__main__':
    unittest.main()
