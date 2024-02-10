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