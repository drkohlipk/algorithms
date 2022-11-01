from typing import List
from helpers.testing.list_sort_tester import ListSortTester


def _merge(
        lst_1: List[int], lst_2: List[int]
) -> List[int]:
    merged_lst: List[int] = []
    i = 0
    j = 0

    while len(merged_lst) < (len(lst_1) + len(lst_2)):
        if j >= len(lst_2) or (i < len(lst_1) and lst_1[i] <= lst_2[j]):
            merged_lst.append(lst_1[i])
            i += 1
        else:
            merged_lst.append(lst_2[j])
            j += 1

    return merged_lst


def merge_sort(lst: List[int]) -> List[int]:
    if len(lst) > 1:
        mid = len(lst) // 2

        lst = _merge(
            merge_sort(lst[mid:]),
            merge_sort(lst[:mid])
        )

    return lst


ListSortTester(merge_sort)
