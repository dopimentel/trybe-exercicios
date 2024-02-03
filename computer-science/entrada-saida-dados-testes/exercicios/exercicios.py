import random
import json
import csv


def reverse_name_ladder(str):
    for i in range(len(str), 0, -1):
        print(str[:i])


if __name__ == "__main__":
    str = input("Digite o nome: ")
    reverse_name_ladder(str)


def scramble_word_game(list_of_words):
    """Scramble word game"""
    word = random.choice(list_of_words)
    scrambled_word = "".join(random.sample(word, len(word)))
    print(scrambled_word)
    for attempts in range(3):
        guess = input("Guess the word: ")
        if guess == word:
            print("You win!")
            break
        else:
            print("Try again!")
            if attempts == 2:
                print(f"The word was {word}")
                break


if __name__ == "__main__":
    list_of_words = ["python", "java", "csharp", "ruby", "javascript"]
    scramble_word_game(list_of_words)


def retrieve_file(file):
    """Retrieve file from path and
    return its content as list of dictionaries"""
    data = json.load(file)
    return data


def total_books_by_category(data):
    """Return a dictionary with the
    count of books by category"""
    books_categories = {}
    for book in data:
        for category in book["categories"]:
            if category in books_categories:
                books_categories[category] += 1
            else:
                books_categories[category] = 1
    return books_categories


print(
    total_books_by_category(
        [{"categories": ["Python", "Java"]}, {"categories": ["Python"]}]
    ).items()
)


def calculate_percentage_by_category(data):
    """Calculate the percentage of books by category"""
    books_percent = total_books_by_category(data).items()
    return [
        [category, total_books / len(data)]
        for category, total_books in books_percent
    ]


def write_report(books_with_percentage):
    """Write the report to a csv file"""
    with open("percentage_by_category_report.csv", "w") as file:
        writer = csv.writer(file)
        writer.writerow(["Category", "Percentage"])
        writer.writerows(books_with_percentage)


if __name__ == "__main__":
    with open("data.json", "r") as file:
        data = retrieve_file(file)
        books_with_percentage = calculate_percentage_by_category(data)
        write_report(books_with_percentage)
        print("Report created successfully!")

# Fizz Buzz with TDD


def fizz_buzz(n):
    """Fizz Buzz"""
    result = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:  # or i % 15 == 0
            result.append("FizzBuzz")
        elif i % 3 == 0:
            result.append("Fizz")
        elif i % 5 == 0:
            result.append("Buzz")
        else:
            result.append(i)
    return result
