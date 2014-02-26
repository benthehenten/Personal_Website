from flask import Flask, jsonify, render_template
import requests 

app = Flask(__name__)
app.config["DEBUG"] = True 

@app.route("/")
def hello():
    return render_template("home.html")

@app.errorhandler(404)
def page_not_found(error):
    return "Whoops." , 404 

if __name__ == "__main__":
    app.run()
