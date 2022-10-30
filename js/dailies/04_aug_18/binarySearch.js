const binarySearch = (arr, x) => {
	let begIdx = 0;
	let endIdx = arr.length - 1;

	while (begIdx <= endIdx) {
		let mid = Math.floor(endIdx - begIdx / 2) + begIdx;

		if (arr[mid] === x) {
			return true;
		} else if (arr[mid] < x) {
			begIdx = mid + 1;
		} else {
			endIdx = mid - 1;
		}
	}

	return false;
};

console.log(binarySearch([0, 3, 5, 6, 7, 8, 9], 10));
