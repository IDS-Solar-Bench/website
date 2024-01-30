from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

sample_readings = [
    {'timestamp': "2024-01-01, 12:00:00", 'temperature': 26, 'capacity': 72, 'message': 'All good'},
    {'timestamp': "2024-01-01, 11:30:00", 'temperature': 25, 'capacity': 75, 'message': 'Wait actually'},
    {'timestamp': "2024-01-01, 11:00:00", 'temperature': 28, 'capacity': 77, 'message': 'Nvm'},
    {'timestamp': "2024-01-01, 10:30:00", 'temperature': 26, 'capacity': 80, 'message': 'No please'},
    {'timestamp': "2024-01-01, 10:00:00", 'temperature': 25, 'capacity': 82, 'message': 'Get me out'},
    {'timestamp': "2024-01-01, 09:30:00", 'temperature': 28, 'capacity': 84, 'message': 'I have a wife and kids'},
    {'timestamp': "2024-01-01, 09:00:00", 'temperature': 26, 'capacity': 86, 'message': 'Warning'},
    {'timestamp': "2024-01-01, 08:30:00", 'temperature': 25, 'capacity': 88, 'message': 'Normal'},
    {'timestamp': "2024-01-01, 08:00:00", 'temperature': 28, 'capacity': 90, 'message': 'All good'},
]

@app.route("/api/home", methods=['GET'])
def return_data():
    return jsonify(sample_readings[-5:])

if __name__ == "__main__":
    app.run(debug=True, port=8080)