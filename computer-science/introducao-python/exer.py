def compare(num, num2):
    if num > num2:
        return num
    else:
        return num2


def arithmetic_average(list):
    soma = 0
    for i in list:
        soma += i
    return soma / len(list)


def asterisk_square(size):
    for i in range(size):
        print("*" * size)


exem = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def lengthest_name(list):
    lengthest = list[0]
    for i in list:
        if len(i) > len(lengthest):
            lengthest = i
    return lengthest


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada
# 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
# que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas e
# o preço total a partir do tamanho de uma parede (em m²).


def paint_calculator(area):
    paint = area / 3
    if paint % 18 == 0:
        return paint / 18, paint / 18 * 80
    else:
        return paint // 18 + 1, (paint // 18 + 1) * 80


# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.


def triangle_type(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b and b == c:
            return "Equilateral"
        elif a == b or a == c or b == c:
            return "Isoceles"
        else:
            return "Scalene"
    else:
        return "Not a triangle"


exem = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def smallest(list):
    smallest = list[0]
    for i in list:
        if i < smallest:
            smallest = i
    return smallest


def asterisk_triangle(size):
    for i in range(size):
        print("*" * (i + 1))


def summation(limit):
    total = 0
    for i in range(limit + 1):
        total += i
    return total


#  Álcool:

#     - Até 20 litros, desconto de 3% por litro;

#     - Acima de 20 litros, desconto de 5% por litro.

#   Gasolina:

#     - Até 20 litros, desconto de 4% por litro;

#     - Acima de 20 litros, desconto de 6% por litro.


def fuel_price(fuel, amount):
    if fuel == "A":
        if amount <= 20:
            return amount * 1.9 * 0.97
        else:
            return amount * 1.9 * 0.95
    elif fuel == "G":
        if amount <= 20:
            return amount * 2.5 * 0.96
        else:
            return amount * 2.5 * 0.94
    else:
        return "Invalid fuel"
