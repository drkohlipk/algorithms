const binSearch = (arr, key, beg, end) => {
	if (beg == end) return [null, beg];

	let half = Math.floor((end - beg) / 2);

	console.log(beg, end, key);

	if (arr[half][1].localeCompare(key) > 0) binSearch(arr, key, beg, half - 1);
	else if (arr[half][1].localeCompare(key) < 0) binSearch(arr, key, half + 1, end);
	else return [1, half];
};

const updateInventory = (arr1, arr2) => {
	for (let i = 0; i < arr2.length; i++) {
		let idx = binSearch(arr1, arr2[i][1], 0, arr1.length - 1);

		if (idx[0]) arr1[idx[1]][0] += arr2[i][0];
		else arr1.splice(idx, 0, arr2[i]);
	}

	return arr1;
};

var currInv = [
	[21, 'bowling balls'],
	[2, 'diapers'],
	[1, 'hairpins'],
	[5, 'microphones']
];

var newInv = [
	[2, 'hairpins'],
	[3, 'half eaten apples'],
	[67, 'bowling balls'],
	[7, 'toothpaste']
];

console.log(updateInventory(currInv, newInv));
