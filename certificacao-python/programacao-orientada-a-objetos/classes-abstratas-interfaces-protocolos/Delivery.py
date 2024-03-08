from typing import Protocol


class Customer:
    """Classe que representa um cliente"""

    def __init__(self, name: str, phone: str) -> None:
        self.name = name
        self.phone = phone


class Adress:
    """Classe que representa um endereço"""

    def __init__(
            self, street: str, number: int, city: str, state: str
            ) -> None:
        self.street = street
        self.number = number
        self.city = city
        self.state = state


class Deliverable(Protocol):
    """Protocolo de um entregável"""

    def deliver(self, customer: Customer, adress: Adress) -> None:
        """Realiza a entrega do entregável"""
        ...


class Mail(Deliverable):
    """Classe que representa uma entrega por correio"""

    def deliver(self, customer: Customer, adress: Adress) -> None:
        print(
            f"Enviando carta para {customer.name}"
            f"no endereço {adress.street}, "
            f"{adress.number} - {adress.city}/{adress.state}"
        )


class ShippingCompany(Deliverable):
    """Classe que representa uma entrega por transportadora"""

    def deliver(self, customer: Customer, adress: Adress) -> None:
        print(
            f"Enviando produto para {customer.name} "
            f"no endereço {adress.street}, "
            f"{adress.number} - "
            f"{adress.city}/{adress.state}"
        )


def main() -> None:
    customer = Customer("João", "123456789")
    adress = Adress("Rua das Flores", 123, "São Paulo", "SP")

    mail = Mail()
    mail.deliver(customer, adress)

    shipping = ShippingCompany()
    shipping.deliver(customer, adress)


if __name__ == "__main__":
    main()
