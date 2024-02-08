def count_total_even_numbers(numbers):
    count = 0
    for number in numbers:
        if number % 2 == 0:
            count += 1
    return count


def count_total_even_numbers_recursive(numbers):
    if not numbers:
        return 0
    return (numbers[0] % 2 == 0) + count_total_even_numbers_recursive(numbers[1:])
