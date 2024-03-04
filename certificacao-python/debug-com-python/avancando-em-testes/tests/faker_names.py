from faker import Faker


faker = Faker(locale="pt_BR")

Faker.seed(0)

user = {
    "name": faker.name(),
    "email": faker.email(),
    "credit_card": faker.credit_card_number(),
    "address": faker.address(),
    "phone_number": faker.phone_number(),
    "cpf": faker.cpf(),
}

print(user)


print(faker.name())

print(faker.phone_number())

print(faker.cpf())
