from pymongo import MongoClient

with MongoClient() as client:
    db = client.catalogue
    book = {
        "title": "A Light in the Attic",
    }
    document_id = db.books.insert_one(book).inserted_id
    print(document_id)
    print(db.list_collection_names())
    print(db.books.find()[0])
    documents = [

        {

            "title": "A Light in the Attic",

        },

        {

            "title": "Tipping the Velvet",

        },

        {

            "title": "Soumission",

        },

    ]

    result = db.books.insert_many(documents)
    print(result.inserted_ids)
    for document in db.books.find():
        print(document)

    print('*' * 50)

    print(db.books.find_one())
    print(db.books.find({"title": "A Light in the Attic"})[0])

    print('*' * 50)

    for document in db.books.find({"title": {"$regex": ".*th.*"}}):
        print(document)

    db.books.delete_many({})
