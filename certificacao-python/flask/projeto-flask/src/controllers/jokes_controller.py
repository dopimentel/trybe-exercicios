from bson import ObjectId
from flask import Blueprint, jsonify, request
import requests
from models.joke_model import JokeModel

jokes_controller = Blueprint("jokes", __name__)


def _get_all_jokes():
    jokes = JokeModel.find()
    return [joke.to_dict() for joke in jokes]


def _get_joke(id: str):
    return JokeModel.find_one({"_id": ObjectId(id)})


def _get_dev_joke():
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


@jokes_controller.route("/dev", methods=["GET"])
def dev_joke():
    return jsonify({"joke": _get_dev_joke()})


@jokes_controller.route("/", methods=["GET"])
def joke_index():
    jokes_list = _get_all_jokes()
    return jsonify(jokes_list)


@jokes_controller.route("/random", methods=["GET"])
def joke_random():
    joke = JokeModel.get_random()
    if joke is None:
        return jsonify({"error": "No jokes available"}), 404

    return jsonify(joke.to_dict()), 200


@jokes_controller.route("/", methods=["POST"])
def joke_post():
    new_joke = JokeModel(request.json)
    new_joke.save()
    return jsonify(new_joke.to_dict()), 201


@jokes_controller.route("/<id>", methods=["PUT"])
def joke_update(id: str):
    joke = _get_joke(id)
    if joke is None:
        return jsonify({"error": "Joke not found"}), 404
    joke.update(request.json or {})
    return jsonify(joke.to_dict()), 200


@jokes_controller.route("/<id>", methods=["GET"])
def joke_show(id: str):
    joke = _get_joke(id)
    if joke is None:
        return jsonify({"error": "Joke not found"}), 404
    return jsonify(joke.to_dict()), 200


@jokes_controller.route("/<id>", methods=["DELETE"])
def joke_delete(id: str):
    joke = _get_joke(id)
    if joke is None:
        return jsonify({"error": "Joke not found"}), 404

    joke.delete()
    return jsonify(joke.to_dict()), 204
