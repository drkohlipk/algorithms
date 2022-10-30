import math
import random

from typing import Callable, List

from helpers.random_list import generate_random_list


class ListSearchTester:
    def __init__(
        self,
        search_method: Callable[[List[int], int], int]
    ) -> None:
        self._search_method = search_method

        self._test_search()

    def _test_search(self) -> None:
        num_failures = 0
        list_len = 1000
        list_to_search = generate_random_list(True, list_len)

        list_to_search.sort()

        for _ in range(list_len):
            rand_val = math.floor(list_len * random.random())

            test = self._search_method(list_to_search, rand_val)
            actual = (rand_val in list_to_search)

            if test is not actual:
                num_failures += 1

        if num_failures:
            print(
                f"Sorry, you had {num_failures} failure{'s' if num_failures > 1 else ''}! 😭")

            return

        print("🎉  Congrats!  All tests passed! 🎉")
