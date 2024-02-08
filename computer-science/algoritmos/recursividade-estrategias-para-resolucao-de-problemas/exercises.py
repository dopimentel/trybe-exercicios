def count_total_even_numbers(numbers):
    """Return the total of even numbers in a list of integers"""
    count = 0
    for number in numbers:
        if number % 2 == 0:
            count += 1
    return count


def count_total_even_numbers_recursive(numbers):
    """Return the total of even numbers in a list of integers using recursion"""
    if not numbers:
        return 0
    return (numbers[0] % 2 == 0) + count_total_even_numbers_recursive(numbers[1:])


def bigger_integer(numbers):
    """Return the biggest integer in a list of integers"""
    if len(numbers) == 1:
        return numbers[0]

    max_rest = bigger_integer(numbers[1:])
    return numbers[0] if numbers[0] > max_rest else max_rest


def mdc_euclides_recursive(a, b):
    """Return the greatest common divisor of two integers using the Euclides algorithm"""
    if b == 0:
        return a
    return mdc_euclides_recursive(b, a % b)


if __name__ == "__main__":
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    print(count_total_even_numbers(numbers))
    print(count_total_even_numbers_recursive(numbers))
    print(bigger_integer(numbers))
    print(mdc_euclides_recursive(10, 5))
