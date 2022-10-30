import math
import random

from typing import List, Union


def generate_random_list(
    is_ints: bool, max_len: int = 100
) -> List[Union[int, float]]:
    length = math.floor(random.random() * max_len)
    arr = []

    for _ in range(length):
        val = math.floor(random.random() *
                         length) if is_ints else random.random() * length

        arr.append(val)

    return arr
