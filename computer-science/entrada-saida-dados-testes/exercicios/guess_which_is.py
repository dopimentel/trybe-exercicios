import json
import random


def guess_which_is(pokemons):
    random_pokemon = random.choice(pokemons["results"])["name"].lower()
    gap = " _ "
    while True:
        for i in range(len(random_pokemon)):
            guess = input("Guess which is the pokémon: ").lower()
            if guess == random_pokemon:
                print("You got it!")
                return
            elif i == len(random_pokemon) - 1:
                print(f"The pokémon was {random_pokemon}")
                return
            else:
                print("Try again!")
                print(
                    f"{random_pokemon[:i +1]}" +
                    f"{gap * ((len(random_pokemon) -1) - i)}"
                )


if __name__ == "__main__":
    with open("pokemons.json", "r") as file:
        pokemons = json.load(file)

    guess_which_is(pokemons)
