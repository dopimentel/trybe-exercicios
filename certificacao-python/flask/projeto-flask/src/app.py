from flask import Flask, jsonify
from controllers.jokes_controller import jokes_controller
from os import environ
from waitress import serve

import requests

app = Flask(__name__)
app.register_blueprint(jokes_controller, url_prefix="/jokes")


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


@app.route("/api/devjoke")
def dev_joke():
    return jsonify({"joke": get_random_joke()})


# joke_list = [
#     "Did you know that 10+10 and 11+11 are the same? <br> "
#     "Because 10+10 is twenty, and 11+11 is twenty too.",
#     "Sabe como chama a sorveteria do Michel Teló? <br> Ice te Pego.",
#     "Por que o espanador não luta caratê? <br> Porque ele luta capoeira",
# ]


# @app.route("/api/joke")
# def joke():

#     return jsonify({"joke": random.choice(joke_list)})


def start_server(host: str = "0.0.0.0", port: int = 8000):
    if environ.get("FLASK_ENV") == "dev":
        return app.run(debug=True, host=host, port=port)

    else:
        serve(app, host=host, port=port)


if __name__ == "__main__":
    start_server()
