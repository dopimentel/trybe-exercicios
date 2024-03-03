import pytest

from main import mean


@pytest.mark.parametrize(
    "input_numbers, expected_result",
    [
        ([3, 4, 4, 5], 4.0),
        ([2.5, 3.75, 1.25, 4], 2.875),
    ],
)
def test_mean(input_numbers, expected_result):
    assert mean(input_numbers) == expected_result


def test_mean_fail():
    with pytest.raises(ZeroDivisionError):
        mean([])


def add(a, b):
    return a + b


@pytest.mark.parametrize(
    "input_a, input_b, expected_result",
    [
        (1, 2, 3),
        pytest.param(0, 0, 0, marks=pytest.mark.slow),
        (-1, 1, 0),
    ],
)
def test_addition(input_a, input_b, expected_result):
    result = add(input_a, input_b)
    assert result == expected_result
