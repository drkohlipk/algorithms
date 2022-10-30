const chunkyMonkey = (arr, size) => {
	const len = arr.length;

	for (let i = 0; i < len / size; i++) {
		arr[i] = arr.slice(i * size, (i * size) + size);
	}

	while (arr.length > (len / size)) {
		arr.pop();
	}

	return arr;
};

console.log(chunkyMonkey(['a', 'b', 'c', 'd'], 2));
