from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
book = {
    "title": "A Light in the Attic",
}
document_id = db.books.insert_one(book).inserted_id
print(document_id)
print(db.list_collection_names())
print(db.books.find()[0])
client.close()  # fecha a conexão com o banco de dados
