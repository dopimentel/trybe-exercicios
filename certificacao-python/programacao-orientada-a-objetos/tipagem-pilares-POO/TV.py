class TV:
    def __init__(self, size: int) -> None:
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__is_on = False

    def increase_volume(self) -> None:
        if self.__volume < 99:
            self.__volume += 1

    def decrease_volume(self) -> None:
        if self.__volume > 0:
            self.__volume -= 1

    def change_channel(self, channel: int) -> None:
        if channel < 1 or channel > 99:
            raise ValueError("Invalid channel")
        self.__channel = channel

    def turn_on_off(self) -> None:
        self.__is_on = not self.__is_on
