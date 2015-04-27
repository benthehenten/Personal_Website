from flask import Flask, jsonify, render_template
import requests
import datetime
now = datetime.datetime.now()


app = Flask(__name__)
app.config["DEBUG"] = True

@app.route("/")
def hello():
    return render_template("home.html")

@app.route("/iplog/<ip>")
def log(ip):
	with open('ip.txt', 'w') as f:
		f.write(str(now) + "\n")
		f.write(ip)
	return render_template("home.html")

@app.route("/iplog2/<ip>")
def log2(ip):
	with open('ip2.txt', 'w') as f:
		f.write(str(now) + "\n")
		f.write(ip)
	return render_template("home.html")

@app.errorhandler(404)
def page_not_found(error):
    return "Whoops." , 404

if __name__ == "__main__":
    app.run(host='0.0.0.0')


