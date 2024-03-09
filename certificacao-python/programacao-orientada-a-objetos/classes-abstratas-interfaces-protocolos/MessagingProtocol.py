from queue import Queue
from typing import Protocol, Tuple, Union


class MessagingProtocol(Protocol):
    """Protocolo de um serviço de mensagens"""

    def send_message(self, to: str, message: str) -> bool:
        """Envia uma mensagem para um destinatário"""
        ...

    def receive_message(self) -> Union[Tuple[str, str], None]:
        """Recebe uma mensagem"""
        ...


class InMemoryMessaging(MessagingProtocol):
    """Classe que representa um serviço de mensagens em memória"""

    def __init__(self) -> None:
        self._messages: Queue[Tuple[str, str]] = Queue()

    def send_message(self, to: str, message: str) -> bool:
        self._messages.put((to, message))
        return True

    def receive_message(self) -> Union[Tuple[str, str], None]:
        if self._messages.empty():
            return None
        return self._messages.get()


class FileMessaging(MessagingProtocol):
    """Classe que representa um serviço de mensagens em arquivo"""

    def send_message(self, to: str, message: str) -> bool:
        with open("messages.txt", "a") as file:
            file.write(f"{to}: {message}\n")
        return True

    def receive_message(self) -> Union[Tuple[str, str], None]:
        with open("messages.txt", "r") as file:
            lines = file.readlines()
            if not lines:
                return None
            message = lines[0]
            del lines[0]
        with open("messages.txt", "w") as file:
            file.writelines(lines)
        return (message.split(": ")[0], message.split(": ")[1])
