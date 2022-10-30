// Implement a program that finds the Fibonacci sum up to a given number of iterations.
const arr = [];

const fibonacci = n => {
	if (typeof n === 'number' && n > -1) {
		let currVal;

		if (arr[n]) {
			currVal = arr[n];
		} else if (n === 0 || n === 1) {
			currVal = 1;
		} else {
			currVal = fibonacci(n - 1) + fibonacci(n - 2);
		}

		return (arr[n] = currVal);
	}

	return undefined;
};

console.log(fibonacci(6)); // should be 13
// 1, 1, 2, 3, 5, 8, 13
// 0, 1, 2, 3, 4, 5, 6
// break case: if n === 0, return 1

// input: non-negative integer
// output: return the corresponding integer with the given iteration
// constraints: no constraints
// add fibonacci(n-1) to fibonacci(n-2)
// time complexity: O(2^n)
// space complexity: O(N)
