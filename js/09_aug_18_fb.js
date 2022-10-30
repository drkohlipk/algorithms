// Take and input and expand upon input by first
// printing out the input and then writing out a
// syntactically expanded first line ==>
// 1 -> 11 "one 1"
// 11 -> 21 "two 1"
// Implementation: first print out the argument,
// Store the last line as a variable,
// Iterate through the last line and build a new string
// containing the syntactically expanded previous line.
// Iterate until can no longer expand due to reaching
// a point where we are larger than the highest single
// digit (9) or cannot expand to begin with.
// Constraints: 9 is the largest single digit. Only integers.
// Runtime: O(2^n)?
// Space Complexity: O(2^n)?
// Edge cases: given empty string, given too large of an input,
// given something other than an integer.

const lookAndSay = count => {
	let lookStr = '1';

	for (let i = 0; i < count; i++) {
		console.log(lookStr);
		lookStr = getNextStr(lookStr);
	}
};

const getNextStr = lookStr => {
	let sayStr = '';
	let currVal = lookStr[0];
	let currCount = 1;

	for (let i = 1; i < lookStr.length; i++) {
		if (lookStr[i] === currVal) {
			currCount++;
		} else {
			sayStr += currCount.toString() + currVal;
			currVal = lookStr[i];
			currCount = 1;
		}
	}

	return sayStr + currCount.toString() + currVal;
};

lookAndSay(20);
