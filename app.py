from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route("/home2")
def hello2():
    return render_template('home2.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug = True)
