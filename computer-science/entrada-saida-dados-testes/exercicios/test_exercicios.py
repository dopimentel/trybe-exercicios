from exercicios import fizz_buzz


def test_fizz_buzz_when_the_argument_is_3():
    assert fizz_buzz(3) == [1, 2, "Fizz"]


def test_fizz_buzz_when_the_argument_is_5():
    assert fizz_buzz(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_fizz_buzz_when_the_argument_is_15():
    assert fizz_buzz(15) == [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]


def test_fizz_buzz_when_the_argument_is_1():
    assert fizz_buzz(1) == [1]
