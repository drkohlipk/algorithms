const swap = (arr, x, y) => {
	const temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
};

const partition = (arr, begIdx, endIdx) => {
	const randIdx = Math.floor(Math.random() * (endIdx - begIdx)) + begIdx;
	swap(arr, begIdx, randIdx);

	let partIdx = begIdx;
	const partVal = arr[endIdx];

	for (let i = begIdx; i < endIdx; i++) {
		if (arr[i] < partVal) {
			swap(arr, i, partIdx);

			partIdx++;
		}
	}

	swap(arr, partIdx, endIdx);

	return partIdx;
};

const quicksort = (arr, begIdx = 0, endIdx = arr.length - 1) => {
	if (begIdx < endIdx) {
		const partIdx = partition(arr, begIdx, endIdx);

		quicksort(arr, begIdx, partIdx - 1);
		quicksort(arr, partIdx + 1, endIdx);
	}
};

const myArr = [8, 6, 7, 5, 3, 0, 9];

quicksort(myArr);

console.log(myArr);