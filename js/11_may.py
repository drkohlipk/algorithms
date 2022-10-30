def iter_str(string):
	beg = 0
	string_len = len(string)
	str_arr = []

	while (string[beg] == ' '):
		beg += 1

	for end in range(beg, string_len):
		if string[end] == ' ':
			str_arr.append(rev_word(string, beg, end - 1))
			beg = end + 1

	str_arr.append(rev_word(string, beg, end))

	return ' '.join(str_arr)


def rev_word(string, beg, end):
	ret_str = ''

	for i in range(end, beg - 1, -1):
		ret_str += string[i]

	return ret_str



print iter_str("hello world")
