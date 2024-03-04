# arquivo: analyzer.py
import json


def read_json_file(file_path):
    with open(file_path, "r") as file:
        return json.load(file)


def analyze_json_file(file_path) -> str:
    if not file_path.endswith(".json"):
        raise ValueError("O arquivo precisa ser um arquivo JSON.")

    data = read_json_file(file_path)
    return (
        f"A pessoa de nome {data['name']} "
        f"tem {data['age']} anos de idade."
    )


if __name__ == "__main__":
    print(analyze_json_file("avancando-em-testes/person_data.json"))
