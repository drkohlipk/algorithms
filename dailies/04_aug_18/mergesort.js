const merge = (arr1, arr2) => {
	let i = 0;
	let j = 0;
	const retArr = [];

	while (retArr.length < arr1.length + arr2.length) {
		if (arr1[i] <= arr2[j] || j === arr2.length) {
			retArr.push(arr1[i++]);
		} else {
			retArr.push(arr2[j++]);
		}
	}

	return retArr;
};

const mergesort = arr => {
	if (arr.length !== 1) {
		const mid = Math.floor(arr.length / 2);
		arr = merge(mergesort(arr.slice(0, mid)), mergesort(arr.slice(mid, arr.length)));
	}

	return arr;
};

console.log(mergesort([9, 8, 7, 6, 5, 3, 0]));