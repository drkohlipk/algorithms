import math
import random

from typing import List, Optional
from helpers.testing.list_sort_tester import ListSortTester


def _swap(lst: List[int], x: int, y: int) -> None:
    temp = lst[x]
    lst[x] = lst[y]
    lst[y] = temp


def _partition(
    lst: List[int], beg_idx: int, end_idx: int
) -> int:
    rand_idx = math.floor(
        (end_idx - beg_idx) * random.random()
    ) + beg_idx

    _swap(lst, rand_idx, end_idx)

    pivot_idx = beg_idx
    pivot_val = lst[end_idx]

    for i in range(beg_idx, end_idx):
        if lst[i] < pivot_val:
            _swap(lst, i, pivot_idx)

            pivot_idx += 1

    _swap(lst, pivot_idx, end_idx)

    return pivot_idx


def quick_sort(
        lst: List[int],
        beg_idx: Optional[int] = None,
        end_idx: Optional[int] = None,
) -> List[int]:
    if beg_idx is None:
        beg_idx = 0
        end_idx = len(lst) - 1

    if beg_idx < end_idx:
        pivot = _partition(lst, beg_idx, end_idx)

        lst = quick_sort(lst, beg_idx, pivot - 1)
        lst = quick_sort(lst, pivot + 1, end_idx)

    return lst


ListSortTester(quick_sort)
