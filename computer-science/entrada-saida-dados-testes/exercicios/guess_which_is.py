import json
import random


def guess_which_is(pokemons):
    random_pokemon = random.choice(pokemons["results"])["name"].lower()
    print(f"O pokémon é {random_pokemon}.")
    index = 0
    gap = " _ "
    while index < len(random_pokemon):
        guess = input("Guess which is the pokémon: ").lower()
        if guess == random_pokemon:
            print("You got it!")
            return
        else:
            print("Try again!")
            print(
                f"{random_pokemon[:index +1]}" +
                f"{gap * ((len(random_pokemon) -1) - index)}"
            )
            index += 1


if __name__ == "__main__":
    with open("pokemons.json", "r") as file:
        pokemons = json.load(file)

    guess_which_is(pokemons)
