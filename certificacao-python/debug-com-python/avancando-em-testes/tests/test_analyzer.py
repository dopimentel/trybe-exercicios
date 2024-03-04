from unittest.mock import Mock, patch

import pytest

from analyzer import analyze_json_file, read_json_file


def test_analyze_json_file():
    mock_read_json_file = Mock(
        side_effect=[
            {"name": "Fred", "age": 43},
            {"name": "Agenor", "age": 86},
        ]
    )
    fake_file_path = "invalid.json"

    with patch("analyzer.read_json_file", mock_read_json_file):
        assert (
            analyze_json_file(fake_file_path)
            == "Fred possui 43 anos de idade."
        )
        assert (
            analyze_json_file(fake_file_path)
            == "Agenor possui 86 anos de idade."
        )

    mock_read_json_file.assert_called_with(fake_file_path)


def test_analyze_json_file_propagates_exception():
    mock_read_json_file = Mock(side_effect=FileNotFoundError)
    fake_file_path = "invalid.json"

    with patch("analyzer.read_json_file", mock_read_json_file):
        with pytest.raises(FileNotFoundError):
            analyze_json_file(fake_file_path)


def test_read_json_file(tmp_path):
    fake_file_path = tmp_path / "fake.json"
    fake_file_path.touch()

    mock_json = Mock()
    mock_json.load = Mock(return_value={"name": "Fred", "age": 43})

    with patch("analyzer.json", mock_json):
        result = read_json_file(fake_file_path)

    assert result == {"name": "Fred", "age": 43}


def test_analyze_json_file_propagates_exception_for_invalid_file():
    fake_file_path = "invalid_file.txt"

    with pytest.raises(
        ValueError, match="O arquivo precisa ser um arquivo JSON."
    ):
        analyze_json_file(fake_file_path)
