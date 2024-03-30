from flask import Flask, jsonify
from os import environ

from waitress import serve

import requests

app = Flask(__name__)


def get_random_joke():
    url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags="
    "nsfw,religious,political,racist,sexist"
    response = requests.get(url)
    if response.status_code == 200:
        joke = response.json()
        if joke["type"] == "single":
            return joke["joke"]
        else:
            return joke["setup"] + "<br>" + joke["delivery"]
    return "No jokes available. Try again."


@app.route("/api/joke")
def joke():
    return jsonify({"joke": get_random_joke()})


def start_server(host: str = "0.0.0.0", port: int = 8000):
    if environ.get("FLASK_ENV") == "dev":
        return app.run(debug=True, host=host, port=port)

    else:
        serve(app, host=host, port=port)


if __name__ == "__main__":
    start_server()
