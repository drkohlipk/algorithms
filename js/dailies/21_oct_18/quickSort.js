const ArraySortTester = require('../../helpers/testing/arrays/ArraySortTester');

const partition = (arr, begIdx, endIdx) => {
	const randIdx = Math.floor((endIdx - begIdx) * Math.random()) + begIdx;
	swap(arr, randIdx, endIdx);

	let pivotIdx = begIdx;
	const pivotVal = arr[endIdx];

	for (let i = begIdx; i < endIdx; i++) {
		if (arr[i] < pivotVal) {
			swap(arr, i, pivotIdx++);
		}
	}

	swap(arr, pivotIdx, endIdx);

	return pivotIdx;
};

const quickSort = (arr, begIdx = 0, endIdx = arr.length - 1) => {
	if (begIdx < endIdx) {
		const pivot = partition(arr, begIdx, endIdx);

		quickSort(arr, begIdx, pivot - 1);
		quickSort(arr, pivot + 1, endIdx);
	}

	return arr;
};

const swap = (arr, x, y) => {
	const temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
};

new ArraySortTester(quickSort);
