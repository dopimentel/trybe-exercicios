def test_a_simple_test():
    assert True


def test_sum(my_list):
    assert sum(my_list) == 7


def test_print_to_stdout(capsys):
    print("Hello, world!")
    captured = capsys.readouterr()
    assert captured.out == "Hello, world!\n"
    assert captured.err == ""
    # print("Hello, world!", file=sys.stderr)
    # captured = capsys.readouterr()
    # assert captured.out == ""
    # assert captured.err == "Hello, world!\n"


def test_error_to_stderr(capsys):
    import sys

    sys.stderr.write("Error message\n")
    captured = capsys.readouterr()
    assert captured.err == "Error message\n"
    assert captured.out == ""
