def find_triple(l, goal):
    dif = {}

    for val in l:
        try:
            dif[goal - val] += 1
        except:
            dif[goal - val] = 1

    for val1 in l:
        for val2 in l:
            if (val1 + val2) in dif:
                print val1, val2, goal - val1 - val2
                return
    
    return

l = [1, 2, 3, 4, 5, 6, 7]
find_triple(l, 5)