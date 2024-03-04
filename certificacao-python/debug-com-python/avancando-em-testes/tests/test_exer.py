def create_user(name, email):

    return {
        "first_name": name.split()[0],
        "last_name": name.split()[-1],
        "email": email,
        "email_domain": email.split("@")[-1],
    }


def test_create_user(faker):
    email = faker.email()
    name = faker.name()

    res = create_user(name, email)

    assert name.startswith(res["first_name"])
    assert name.endswith(res["last_name"])
    assert res["email"] == email
    assert email.endswith(res["email_domain"])
