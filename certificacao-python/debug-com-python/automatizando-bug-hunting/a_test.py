def test_a_simple_test():
    assert True


def test_sum():
    assert sum([2, 2, 6]) == 10


def test_list_item_multiply():
    my_list = [2, 2, 3]
    assert [item * 3 for item in my_list] == [6, 6, 9]
