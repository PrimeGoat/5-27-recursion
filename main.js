//******DO EACH PROBLEM ITERATIVELY AND RECURSIVELY****


//1
// Write a JavaScript program to compute the product of an array of integers.
// Example : const array = [1, 23, 19, 8, 5, 2]
// Expected Output : 720
/******** */
console.log("#1");

const productI = function(ints) {
    let product = 1;

    for(num of ints) product *= num;

    return product;
}

const productR = function(ints) {
    if(ints.length == 1)        return ints[0];
    else if(ints.length > 1)    return ints[0] * productR(ints.slice(1));
    else                        return 1;
}

// The output is 34960.  I don't know why the question expects 720.  I did this manually with a calculator and got the same result: 34960
console.log(productI([1, 23, 19, 8, 5, 2]));
console.log(productR([1, 23, 19, 8, 5, 2]));



//2
// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should accept a single parameter and return a Boolean.
// Test it on 50 and 75. If you solve, See how it behaves on -1. Why? Can you think of a way to fix this?
console.log("#2");

const isEvenI = function(input) {
    input = Math.abs(input);

    while(input > 1) input -= 2;

    if(!input) return true;
    else return false;
}

const isEvenR = function(input) {
    input = Math.abs(input); // function behaves with negative numbers because they stop being negative

    switch(input) {
        case 0:
            return true;
        case 1:
            return false;
        default:
            return isEvenR(input - 2);
    }
}

// This is not an efficient way to check for evenness, and can result in a stack overflow with large numbers.  Both a recursive and an iterative version are inefficient.  Modulus should be used instead.
console.log(isEvenI(50), isEvenI(75), isEvenI(-1));
console.log(isEvenR(50), isEvenR(75), isEvenR(-1));
console.log(isEvenI(0), isEvenI(1), isEvenI(2), isEvenI(40), isEvenI(-1), isEvenI(-22), isEvenI(-7));
console.log(isEvenR(0), isEvenR(1), isEvenR(2), isEvenR(40), isEvenR(-1), isEvenR(-22), isEvenR(-7));
// true false true true false true false



//3
// Using recursion, return all indexes as one string with a space between each index.
// Do not mutate the original array
console.log("#3");

let arr1 = ['i', 'chained', 'all', 'items', 'in', 'this', 'arrray'];

const concatI = function(arr) {
    let out = "";

    for(let i = 0; i < arr.length; i++) {
        out += arr[i];
        if(i + 1 != arr.length) out += ' ';
    }

    return out;
}

const concatR = function(arr) {
    if(arr.length == 1)     return arr[0];
    else if(arr.length > 1) return arr[0] + ' ' + concatR(arr.slice(1));
    else                    return '';
}

console.log(concatI(arr1));
console.log(concatR(arr1));


//4
// Reverse the string
let str = 'abcdefg';
// Expected Output: 'gfedcba'
console.log("#4");

const reverseI = function(str) {
    let out = '';

    for(let i = str.length - 1; i >= 0; i--) out += str[i];

    return out;
}

const reverseR = function(str) {
    if(!str.length)         return '';
    else if(str.length == 1)    return str[0];
    else                        return str[str.length - 1] + reverseR(str.slice(0, str.length - 1));
}

console.log(reverseI(str));
console.log(reverseR(str));



//5
// Write a function called all which accepts an array and a callback function and returns true if every value in the array returns true when passed as parameter to the callback function
console.log("#5");

const allI = function(arr, callback) {
    for(entry of arr) if(callback(entry) == false) return false;
    return true;
}

const allR = function(arr, callback) {
    //return !allRin(arr, callback).contains('0');
    return !allRin(arr, callback).includes('0');
}

const allRin = function(arr, callback) {
    if(!arr.length)             return '';
    else if(arr.length == 1)    return (callback(arr[0])) ? '1' : '0';
    else                        return ((callback(arr[0])) ? '1' : '0') + allRin(arr.slice(1), callback);
}

// <TEST CODE> //
all = allI;

let allAreLessThanSeven = all([1, 2, 9], num => {
    return num < 7;
});
console.log(allAreLessThanSeven); //
//Expected output: false

let timesFiveLessThanHundred = all([1, 2, 5], num => {
    return num * 5 < 100;
});
console.log(timesFiveLessThanHundred);
// Expected output: true
// </TEST CODE> //

console.log("---");

// <TEST CODE> //
all = allR;

allAreLessThanSeven = all([1, 2, 9], num => {
    return num < 7;
});
console.log(allAreLessThanSeven); //
//Expected output: false

timesFiveLessThanHundred = all([1, 2, 5], num => {
    return num * 5 < 100;
});
console.log(timesFiveLessThanHundred);
// Expected output: true
// </TEST CODE> //


//6
// Stretch
// create a function that takes every piece of data from the object and places each piece in a single array.
console.log("#6");

const data = {
	gender: 'male',
	name: {
		title: 'Mr',
		first: 'Charles',
		last: 'Hall',
	},
	location: {
		street: {
			number: 2437,
			name: 'Pine Hill Road',
		},
		city: 'Palmerston North',
		state: 'Northland',
		country: 'New Zealand',
		postcode: 81883,
		coordinates: {
			latitude: '65.3561',
			longitude: '-88.1648',
		},
		timezone: {
			offset: '-12:00',
			description: 'Eniwetok, Kwajalein',
		},
	},
	email: 'charles.hall@example.com',
	login: {
		uuid: '3303a98c-b79c-4230-87f6-c44271a999e2',
		username: 'yellowgorilla781',
		password: 'johnson1',
	},
	likes: ['ice', 'chair'],
	dob: {
		date: '1960-06-18T18:19:49.997Z',
		age: 59,
	},
	registered: {
		date: '2007-05-24T01:02:51.681Z',
		age: 12,
	},
	phone: '(406)-556-8131',
	cell: '(227)-126-0483',
	id: {
		name: 'Pete',
		value: null,
	},
	zones: {
		zone1: [1, 2, 3],
		zoned2: [5, 6, 7],
	},
}

// */
