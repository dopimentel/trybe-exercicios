from typing import Protocol


class Connection(Protocol):
    """Protocolo de conexão com o banco de dados"""

    def execute(self, query: str) -> list[str]:
        """Executa uma query no banco e retorna os dados, caso existam"""
        ...


class Database(Protocol):
    """Protocolo de um banco de dados"""

    def connect(self, connection_url: str) -> Connection:
        """Realiza uma conexão com o banco de dados"""
        ...
