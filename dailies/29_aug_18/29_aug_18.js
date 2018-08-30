// Start at root with empty array and integer
// that keeps track of depth.  Need add the value of that
// node to the last value in the array and then push it
// to the array.  Once added to the array, check to
// see if it matches the sought after integer and add
// to the count as necessary.

// TC: O(2^N)
// SC: O(N)

class Tree {
	constructor() {
		this.root = null;
	}

	findNumberOfPathsWithSum(valToLookFor) {
		if (!valToLookFor && valToLookFor !== 0) return 0;

		return this.findNumberOfPathsWithSumHelper(valToLookFor, this.root, [], 0);
	}

	findNumberOfPathsWithSumHelper(valToLookFor, node, pathArr, count) {
		if (!node) return count;
		if (node.value === valToLookFor) count++;

		pathArr.push(node.value);

		for (let i = 0; i < pathArr.length - 1; i++) {
			pathArr[i] += node.value;

			if (pathArr[i] === valToLookFor) count++;
		}

		count = this.findNumberOfPathsWithSumHelper(
			valToLookFor,
			node.left,
			pathArr,
			count
		);
		count = this.findNumberOfPathsWithSumHelper(
			valToLookFor,
			node.right,
			pathArr,
			count
		);

		for (let i = 0; i < pathArr.length - 1; i++) {
			pathArr[i] -= node.value;
		}

		pathArr.pop();

		return count;
	}
}

class TreeNode {
	constructor(val) {
		this.value = val;
		this.left = undefined;
		this.right = undefined;
	}
}

const tree = new Tree();

const five = new TreeNode(5);
const six = new TreeNode(6);
const negThree = new TreeNode(-3);
const leftTwo = new TreeNode(2);
const one = new TreeNode(1);
const three = new TreeNode(3);
const rightTwo = new TreeNode(2);
const four = new TreeNode(4);

tree.root = five;
five.left = six;
five.right = three;
six.left = negThree;
six.right = leftTwo;
leftTwo.right = one;
three.left = rightTwo;
three.right = four;

console.log(tree.findNumberOfPathsWithSum(8));
