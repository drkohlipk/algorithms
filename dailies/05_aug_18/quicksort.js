const randomArr = require('../../helpers/randomArr');

const partition = (arr, begIdx, endIdx) => {
	const randIdx = Math.floor((endIdx - begIdx) * Math.random()) + begIdx;
	swap(arr, begIdx, randIdx);

	let partIdx = begIdx;
	const partVal = arr[endIdx];

	for (let i = begIdx; i < endIdx; i++) {
		if (arr[i] < partVal) {
			swap(arr, i, partIdx++);
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

const swap = (arr, x, y) => {
	const temp = arr[x];
	arr[x] = arr[y];
	arr[y] = temp;
};

const myArr = randomArr(true, 10);
console.log(myArr);

quicksort(myArr);

console.log(myArr);
