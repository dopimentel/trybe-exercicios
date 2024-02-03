from exercicios import fizz_buzz, validate_email
import pytest


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


def test_user_name_must_contain_only_letters():
    assert validate_email("sdfsdfcfg@email.com") is None


def test_user_name_must_contain_letters_and_digits():
    assert validate_email("dffgdg123@email.com") is None


def test_user_name_contain_letters_digits_dashes():
    assert validate_email("aa-1@email.com") is None


def test_user_name_contain_letters_digits_dashes_underscores():
    assert validate_email("sd_a-1@email.com") is None


def test_user_name_should_start_with_letter():
    assert validate_email("a@email.com") is None


def test_should_raise_excepition_when_not_start_with_letter():
    with pytest.raises(ValueError):
        validate_email("1@email.com")


def test_user_name_invalid_raises_exception():
    with pytest.raises(ValueError):
        validate_email("a#1@email.com")


def test_domain_must_contain_only_letters_and_digits():
    assert validate_email("user@dominio123.com") is None


def test_domain_invalid_chars_raises_exception():
    with pytest.raises(ValueError):
        validate_email("xxxx@!123.com")


def test_extension_should_contain_three_letters():
    assert validate_email("user@domain.com") is None


def test_extension_invalid_chars_raises_exception():
    with pytest.raises(ValueError):
        validate_email("xxxx@xxxxxx.1234")
