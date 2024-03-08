import sys
from .database.mysql import MySQLDatabase
from .database.postgresql import PostgresDatabase
from .interfaces import Connection, Database


def connect_and_print_result(database: Database, query: str) -> None:
    try:
        connection: Connection = database.connect("url_de_exemplo")
        result = connection.execute(query)
        for element in result:
            print(element)
    except ValueError as e:
        print(e)


def main() -> None:
    try:
        database_name: str = sys.argv[1].lower()
    except IndexError:
        database_name = input(
            "Digite o nome do banco de dados que deseja usar: "
        ).lower()

    query: str = input("Digite a query que deseja executar: ")

    if database_name == "postgres":
        connect_and_print_result(PostgresDatabase(), query)
    elif database_name == "mysql":
        connect_and_print_result(MySQLDatabase(), query)
    else:
        raise ValueError("Database inválido!")


if __name__ == "__main__":
    main()
