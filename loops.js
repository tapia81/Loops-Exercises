//Write a for loop that will iterate from 0 to 10,
//it will multiply the number by 9
//and log the result (e.g. "2 * 9 = 18")
//Bonus: Use a nested for loop to show the tables for every
//multiplier from 1 to 10 (100 results total)
console.log('Lab Exercise 1 Part A');
for (let i = 0; i <= 10; i++) {
	console.log(`${i} * 9 = ${i * 9}`);
}
console.log('\nLab Exercise 1 Bonus');
let count = 0;
for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 10; j++) {
		console.log(`${i} * ${j} is ${i * j}`);
		count += 1;
	}
}
console.log(`We looped ${count} times`);

//Write a while loop that starts counting from 5.
//Count up to (including) 50 and count only every fifth number
//Don' forget to log it
console.log('\nLab Exercise 2');
let i = 5;
while (i < 51) {
	console.log(i);
	i += 5;
}

//Write a function that takes an array of numbers as an argument.
//This function should return the first duplicate number in the array:
// For example: [2,7,5,9,8,7] should return 7;
console.log('\nLab Exercise 3');
function duplicate(arr) {
	let temp = arr[0];

	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j < arr.length; j++) {
			if (temp === arr[j]) {
				return arr[j];
			} else {
				temp = arr[i];
			}
		}
	}
}
console.log(`The duplicate number is ${duplicate([ 2, 7, 5, 5, 8, 3 ])}`);

//Remembering the results from the conditionals exercise on Monday
// use the assignGrade function by logging every value from 60 to 100:
//your log should show "For 88, you got a B" "For 90 you got an A"etc..
console.log('\nLab Exercise 4');
function assignGrade(numberScore) {
	switch (true) {
		case numberScore >= 90:
			return 'A';
		case numberScore >= 80:
			return 'B';
			break;
		case numberScore >= 70:
			return 'C';
			break;
		case numberScore >= 60:
			return 'D';
			break;
		case numberScore <= 59:
			return 'F';
			break;
	}
}
for (let i = 60; i <= 100; i++) {
	assignGrade(i);
	console.log(`For ${i} you got the letter grade ${assignGrade(i)}`);
}
