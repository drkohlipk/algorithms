def make_subsets(sofar, arr, length):
    if length == 0:
        print sofar
        return

    make_subsets(sofar + [arr[0]], arr[:0] + arr[1:], length-1)
    make_subsets(sofar, arr[:0] + arr[1:], length-1)

make_subsets([], [1, 2, 3], 3)
