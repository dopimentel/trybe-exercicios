# arquivo: testes/teste_analyzer.py
from unittest.mock import Mock, patch

from analyzer import analyze_json_file


def test_analyze_json_file():
    mock_read_json_file = Mock(return_value={"name": "Fred", "age": 40})
    fake_file_path = "data.json"

    with patch("analyzer.read_json_file", mock_read_json_file):
        result = analyze_json_file(fake_file_path)

    assert result == "A pessoa de nome Fred tem 40 anos de idade."
    mock_read_json_file.assert_called_with(fake_file_path)
