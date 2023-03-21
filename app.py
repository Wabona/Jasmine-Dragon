from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Chiku and Wubz!'

@app.route('/tea')
def tea():
    return "<h2> This is a tea page <h2>"