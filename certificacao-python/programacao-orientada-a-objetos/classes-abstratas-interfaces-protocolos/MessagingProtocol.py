from queue import Queue
from typing import Protocol, Tuple, Union


class MessagingProtocol(Protocol):
    """Protocolo de um serviço de mensagens"""

    def send_message(self, to: str, message: str) -> bool:
        """Envia uma mensagem para um destinatário"""
        ...

    def receive_message(self) -> Union[str, None]:
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
        if not self._messages.empty():
            to, message = self._messages.get()
            return f"Mensagem para {to}: {message}"
        return None
