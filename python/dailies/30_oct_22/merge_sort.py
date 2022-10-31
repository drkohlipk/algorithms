from typing import List
from helpers.testing.list_sort_tester import ListSortTester


def _merge(list_1: List[int], list_2: List[int]) -> List[int]:
    merged_list = []
    i = 0
    j = 0

    while len(merged_list) < (len(list_1) + len(list_2)):
        if j >= len(list_2) or (i < len(list_1) and list_1[i] <= list_2[j]):
            merged_list.append(list_1[i])
            i += 1
        else:
            merged_list.append(list_2[j])
            j += 1

    return merged_list


def merge_sort(lst: List[int]) -> List[int]:
    if len(lst) > 1:
        mid = len(lst) // 2

        lst = _merge(
            merge_sort(lst[:mid]),
            merge_sort(lst[mid:])
        )

    return lst


ListSortTester(merge_sort)
