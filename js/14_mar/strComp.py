def strComp(str1):
	let = str1[0]
	count = 1
	str2List = []
	length = len(str1)

	for i in range(1, length):
		if str1[i] != let:
			str2List.append(let)
			str2List.append(str(count))
			let = str1[i]
			count = 0
		count += 1

	str2List.append(let)
	str2List.append(str(count))

	if len(str1) <= len(str2List): return str1

	return ''.join(str2List)


print strComp('aabbccab')
