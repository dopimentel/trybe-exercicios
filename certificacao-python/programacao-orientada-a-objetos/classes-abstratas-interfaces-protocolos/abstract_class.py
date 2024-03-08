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
