import json

with open("pokemons.json") as f:
    pokemons = json.load(f)["results"]

grass_type_pokemons = []
for pokemon in pokemons:
    if "Grass" in pokemon["type"]:
        grass_type_pokemons.append(pokemon)

with open("grass_pokemons.json", "w") as f:
    json.dump(grass_type_pokemons, f, indent=4)
