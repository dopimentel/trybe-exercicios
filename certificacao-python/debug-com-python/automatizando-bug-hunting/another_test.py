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
