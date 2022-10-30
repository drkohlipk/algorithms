const randomArr = require('../../helpers/randomArr');

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

	swap(arr, endIdx, pivotIdx);

	return pivotIdx;
};

const quickSort = (arr, begIdx = 0, endIdx = arr.length - 1) => {
	if (begIdx < endIdx) {
		const pivot = partition(arr, begIdx, endIdx);

		quickSort(arr, begIdx, pivot - 1);
		quickSort(arr, pivot + 1, endIdx);
	}
};

const swap = (arr, x, y) => {
	const temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
};

const myArr = randomArr(true, 20);
console.log(myArr);
quickSort(myArr);
console.log(myArr);

module.exports = quickSort;
