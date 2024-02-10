from random import shuffle
from Cronometro import Cronometro

sorted = list(range(100))
reversed_sorted = list(reversed(range(100)))
randoms = sorted[:]
shuffle(randoms)


def selection_sort(list):
    for i in range(len(list)):
        min_index = i
        for j in range(i + 1, len(list)):
            if list[j] < list[min_index]:
                min_index = j
        list[i], list[min_index] = list[min_index], list[i]
    return list


def insertion_sort(list):
    for i in range(1, len(list)):
        key = list[i]
        j = i - 1
        while j >= 0 and key < list[j]:
            list[j + 1] = list[j]
            j -= 1
        list[j + 1] = key
    return list


for algorithm in [selection_sort, insertion_sort]:
    algorithm_name = algorithm.__name__
    for input in (10_000, 100_000, 1_000_000):
        with Cronometro(f"{algorithm_name} com {input} entradas aleatórias"):
            algorithm(randoms[:input])
        with Cronometro(f"{algorithm_name} com {input} entradas ordenados"):
            algorithm(sorted[:input])
        with Cronometro(f"{algorithm_name} com {input} entradas em ordem reversa"):
            algorithm(reversed_sorted[:input])
        print("*" * 50)


def bubble_sort(list):
    for i in range(len(list)):
        for j in range(len(list) - i - 1):
            if list[j] > list[j + 1]:
                list[j], list[j + 1] = list[j + 1], list[j]
    return list


def merge_sort(list):
    if len(list) > 1:
        mid = len(list) // 2
        left = list[:mid]
        right = list[mid:]

        merge_sort(left)
        merge_sort(right)

        i = j = k = 0

        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                list[k] = left[i]
                i += 1
            else:
                list[k] = right[j]
                j += 1
            k += 1

        while i < len(left):
            list[k] = left[i]
            i += 1
            k += 1

        while j < len(right):
            list[k] = right[j]
            j += 1
            k += 1
    return list


for algorithm in [bubble_sort, merge_sort]:
    algorithm_name = algorithm.__name__
    for input in (10_000, 100_000, 1_000_000):
        with Cronometro(f"{algorithm_name} com {input} entradas aleatórias"):
            algorithm(randoms[:input])
        with Cronometro(f"{algorithm_name} com {input} entradas ordenados"):
            algorithm(sorted[:input])
        with Cronometro(f"{algorithm_name} com {input} entradas em ordem reversa"):
            algorithm(reversed_sorted[:input])
        print("*" * 50)


def binary_search_iterative(list, item):
    low = 0
    high = len(list) - 1
    while low <= high:
        mid = (low + high) // 2
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid - 1
        else:
            low = mid + 1
    return -1


if __name__ == "__main__":
    with Cronometro("Busca binária iterativa"):
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        target = 10
        print(binary_search_iterative(array, target))
    print("*" * 50)

