from typing import Union


class HomeAppliance:
    def __init__(
        self, color: str, power: int, voltage: int, price: Union[float, int]
    ) -> None:
        self.color = color
        self.price = price
        self.power = power
        self.voltage = voltage
        self.max_speed = 3

        self.turn_off()

    def turn_on(self, speed: int) -> None:
        self.is_on = True
        self.speed = speed if speed <= self.max_speed else self.max_speed

    def turn_off(self) -> None:
        self.is_on = False
        self.speed = 0

    def __str__(self) -> str:
        return (
            f"Color: {self.color}\n"
            f"Price: {self.price}\n"
            f"Power: {self.power}W\n"
            f"Voltage: {self.voltage}V\n"
            f"Speed: {self.speed}\n"
            f"Is on: {self.is_on}"
        )


class Blender(HomeAppliance):
    pass


print(Blender("black", 1000, 220, 150.00))


class Vehicle:
    def __init__(self, name: str, capacity: int) -> None:
        self.name = name
        self.capacity = capacity

    def move(self, distance: int) -> str:
        return (
            f"{self.name} carried {self.capacity} people across {distance} "
            "kilometers"
        )

    def __str__(self) -> str:
        return f"Name: {self.name}\nCapacity: {self.capacity}"


vehicle = Vehicle("Bus", 50)
print(vehicle)
print(vehicle.move(100))


class Car(Vehicle):
    def move(self, distance: int) -> str:
        return f"Car {super().move(distance)}"


class Motorcycle(Vehicle):
    def __init__(self, name: str) -> None:
        super().__init__(name, capacity=2)


motorcycle = Motorcycle("Harley")
print(motorcycle)
print(motorcycle.move(10))


class Retangle:
    def __init__(self, width: int, height: int) -> None:
        self.width = width
        self.height = height

    def area(self) -> int:
        return self.width * self.height

    def perimeter(self) -> int:
        return 2 * (self.width + self.height)

    def __str__(self) -> str:
        return f"Width: {self.width}\nHeight: {self.height}"


retangle = Retangle(10, 20)
print(retangle)
print(retangle.area())
print(retangle.perimeter())


class MonthlyExpenses:
    def __init__(
        self, internet: float, grocery: float, power: float, water: float, rent: float
    ) -> None:
        self.internet = internet
        self.grocery = grocery
        self.power = power
        self.water = water
        self.__rent = rent

    @property
    def power(self) -> float:
        return self._power

    @power.setter
    def power(self, value: float) -> None:
        self._power = value

    @property
    def water(self) -> float:
        return self._water

    @water.setter
    def water(self, value: float) -> None:
        self._water = value


monthly_expenses = MonthlyExpenses(100.00, 500.00, 200.00, 100.00, 1500.00)
print(monthly_expenses.water)
monthly_expenses.water = 150.00
print(monthly_expenses.water)


class Product:
    def __init__(self, name: str, price: float) -> None:
        self._name = name
        self._price = price

    def get_description(self) -> str:
        return f"Name: {self._name}\nPrice: {self._price}"

    def get_price(self) -> float:
        return self._price


class Book(Product):
    def __init__(self, name: str, price: float, author: str) -> None:
        super().__init__(name, price)
        self._author = author

    def get_description(self) -> str:
        return f"{super().get_description()}\nAuthor: {self._author}"


class DVD(Product):
    def __init__(self, name: str, price: float, direction: str) -> None:
        super().__init__(name, price)
        self._direction = direction

    def get_description(self) -> str:
        return f"{super().get_description()}\nDirection: {self._direction}"


def print_details(product: Product) -> None:
    print(product.get_description())


products = [
    Book("The Lord of the Rings", 39.90, "J.R.R. Tolkien"),
    DVD("The Matrix", 29.90, "Wachowski"),
]

for product in products:
    print_details(product)
