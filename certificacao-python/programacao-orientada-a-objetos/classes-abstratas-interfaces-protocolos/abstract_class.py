from abc import ABC, abstractmethod


class Abst(ABC):
    @abstractmethod
    def example(self) -> None:
        print("Reaproveitar esse método na subclasse")


class Sub(Abst):
    def example(self) -> None:
        super().example()
        print("Subclasse chamando o método da superclasse abstrata")


# a = Abst()  # TypeError: Can't instantiate abstract class Abst
# with abstract methods example

z = Sub()
z.example()


class TestClass(ABC):
    def __init__(self, name: str) -> None:
        self._name = name

    @property
    @abstractmethod
    def name(self) -> str:
        return self._name


class TestSubClass(TestClass):
    @property
    def name(self) -> str:
        return super().name


if __name__ == "__main__":
    test = TestSubClass("Test")
    print(test.name)
