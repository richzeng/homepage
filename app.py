from flask import Flask, render_template

from projects import PROJECTS

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/contact")
def contact():
    return render_template('contact.html')

@app.route("/projects")
def projects():
    return render_template('projects.html', projects=PROJECTS)

@app.route("/projects2")
def projects2():
    return render_template('projects2.html', projects=PROJECTS)

@app.route("/test")
def test():
    return render_template('test.html', projects=PROJECTS)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug = True)
