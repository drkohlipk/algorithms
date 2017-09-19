def swap(arr, a, b):
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp

    return arr

def iSort(arr):
    for i in range(len(arr)):
        min_idx = i

        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j

        arr = swap(arr, min_idx, i)

    return arr

def merge(arr1, arr2):
    new_arr = []
    i = 0
    j = 0

    while len(new_arr) < len(arr1) + len(arr2):
        if  (j >= len(arr2)) or (i < len(arr1)) and (arr1[i] <= arr2[j]):
            new_arr.append(arr1[i])
            i += 1
        else:
            new_arr.append(arr2[j])
            j += 1

    return new_arr

def mSort(arr):
    if len(arr) <= 1:
        return arr

    half = len(arr) // 2

    l_arr = mSort(arr[:half])
    r_arr = mSort(arr[half:])

    return merge(l_arr, r_arr)

print mSort([9, 8, 7, 6, 5, 0, 3, 2, 1])
