import math

from typing import List

from helpers.testing.list_search_tester import ListSearchTester


def binary_search(arr: List[int], x: int) -> int:
    beg_idx = 0
    end_idx = len(arr) - 1

    while beg_idx <= end_idx:
        mid = math.floor((end_idx - beg_idx) / 2) + beg_idx

        if arr[mid] == x:
            return True

        if arr[mid] < x:
            beg_idx = mid + 1
        else:
            end_idx = mid - 1

    return False


ListSearchTester(binary_search)
