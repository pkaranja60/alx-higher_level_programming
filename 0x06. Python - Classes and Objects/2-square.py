#!/usr/bin/python3
# 2-square.py
"""Square class definitions."""


class Square:
    """Square class body"""

    def __init__(self, size=0):
        """Square class constructors
        Args:
            size (int): The size of the new square.
        """
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size