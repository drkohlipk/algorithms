def get_year_with_most_people(my_list):
    birth_list = []
    death_list = []

    for years in my_list:
        birth_list.append(years[0])
        death_list.append(years[1])

    birth_list = sorted(birth_list)
    death_list = sorted(death_list)

    birth_idx = 0
    death_idx = 0
    count = 0
    best_year = (0, 0)

    while birth_idx < len(birth_list) and death_idx < len(death_list):
        if birth_list[birth_idx] <= death_list[death_idx]:
            count += 1
            birth_idx += 1

        else:
            count -= 1
            death_idx += 1

        if count > best_year[0]:
            best_year = (count, death_list[death_idx])

    return best_year

LIST1 = [(1900, 1950), (1949, 1980), (1930, 1970)]
LIST2 = [(1936, 1950), (1930, 1970), (1970, 1980), (1944, 1945)]

print get_year_with_most_people(LIST2)
