keypad = {
    1: [6, 8],
    2: [9, 7],
    3: [8, 4],
    4: [9, 3, 0],
    5: [],
    6: [1, 7, 0],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4],
    0: [4, 6]
}

def print_path_count(n):
    count_map = {}

    def rec_helper(n, kP):
        if n == 0:
            return 1

        if (n, kP) in count_map:
            return count_map[(n, kP)]

        count = 0

        for i in range(len(keypad[kP])):
            count += rec_helper(n-1, keypad[kP][i])

        count_map[(n, kP)] = count

        return count

    print rec_helper(n, 1)

print_path_count(1)
