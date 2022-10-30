import enum
from typing import Callable, List

from helpers.random_list import generate_random_list


class ListSortTester:
    def __init__(self, sort_method: Callable[[List, int], int]) -> None:
        self._sort_method = sort_method

        self._test_sort()

    def _test_sort(self) -> None:
        num_failures = 0
        list_to_sort = generate_random_list(True, 100000)

        test_sorted_list = self._sort_method(list_to_sort.copy())

        num_failures += self._test_contents(list_to_sort, test_sorted_list)
        num_failures += self._test_sorted(test_sorted_list)

        if num_failures:
            print(
                f"Sorry, you had {num_failures} failure{'s' if num_failures > 1 else ''}! 😭")

            return

        print("🎉  Congrats!  All tests passed! 🎉")

    def _test_contents(
        self, expected_list: List[int], test_list: List[int]
    ) -> int:
        content_obj = {}
        num_failures = 0

        if len(expected_list) != len(test_list):
            num_failures += 1

        for _, item in enumerate(expected_list):
            content_obj[item] = (
                0 if item not in content_obj else content_obj[item]) + 1

        for _, item in enumerate(test_list):
            if item in content_obj:
                content_obj[item] -= 1

                if content_obj[item] == 0:
                    del content_obj[item]

            else:
                num_failures += 1

        if len(content_obj):
            num_failures += 1

        return num_failures

    def _test_sorted(self, test_list: List[int]) -> int:
        num_failures = 0

        for i in range(len(test_list) - 1):
            if test_list[i] > test_list[i + 1]:
                num_failures += 1

        return num_failures
