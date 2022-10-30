def min_diff(l1, l2):
    l1_index = 0
    l2_index = 0
    min_dif = float('inf')

    while(l1_index < len(l1) and l2_index < len(l2)):
        dif = abs(l1[l1_index] - l2[l2_index])

        if (dif < min_dif):
            min_dif = dif
        if (l1[l1_index] < l2[l2_index] and l1_index < len(l1)-1 or l2_index >= len(l2)-1):
            l1_index += 1
        else:
            l2_index += 1

    return min_diff