from flask import Flask, jsonify
import random

app = Flask(__name__)

joke_list = [
    "Did you know that 10+10 and 11+11 are the same? <br> "
    "Because 10+10=20 11+11=22.",
    "Sabe como chama a sorveteria do Michel Teló? <br> Ice te Pego.",
    "Por que o espanador não luta caratê? <br> Porque ele luta capoeira",
]


@app.route("/api/joke")
def joke():
    return jsonify({"joke": random.choice(joke_list)})


def start_server(host: str = "0.0.0.0", port: int = 8000):
    app.run(debug=True, host=host, port=port)


if __name__ == "__main__":
    start_server()
