import json


with open("pokemons.json") as f:
    pokemons = json.loads(f.read())["results"]

print(pokemons[0])


with open("pokemons.json") as f:
    pokemons = json.load(f)["results"]

print(pokemons[0])
