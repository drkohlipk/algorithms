from typing import List

from helpers.testing.list_search_tester import ListSearchTester


def binary_search(lst: List[int], x: int) -> bool:
    beg_idx = 0
    end_idx = len(lst) - 1

    while beg_idx <= end_idx:
        mid = ((end_idx - beg_idx) // 2) + beg_idx

        if lst[mid] == x:
            return True

        if lst[mid] < x:
            beg_idx = mid + 1
        else:
            end_idx = mid - 1

    return False


ListSearchTester(binary_search)
