def make_subsets(sofar, arr, length):
    if length == 0:
        print sofar
        return

    for i in range(length):
        make_subsets(sofar + [arr], arr[:-1], length-1)
        make_subsets(sofar + [arr[:i] + arr[i+1:]], arr[:i] + arr[i+1:-1], length-1-i)

make_subsets([], [1, 2, 3], 3)
