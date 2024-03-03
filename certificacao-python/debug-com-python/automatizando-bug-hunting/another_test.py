import json
import os


def test_list_item_multiply(my_list):
    assert [item * 3 for item in my_list] == [6, 6, 9]


def my_function():
    return f"Você digitou {input('Digite algo: ')}!"


def test_my_function(monkeypatch):
    def mock_input(_):
        return "pytest is awsome"

    monkeypatch.setattr("builtins.input", mock_input)
    output = my_function()

    assert output == "Você digitou pytest is awsome!"


def generate_output(content, path):

    with open(path, "w", encoding="utf-8") as f:

        f.write(json.dumps(content))


def test_generate_output(tmp_path):

    content = {"b": 2}
    output_path = tmp_path / "data.json"

    generate_output(content, output_path)

    assert os.path.isfile(output_path)
    with open(output_path) as file:
        assert file.read() == '{"b": 2}'
