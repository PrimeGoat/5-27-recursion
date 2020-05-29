//******DO EACH PROBLEM ITERATIVELY AND RECURSIVELY****


//1
// Write a JavaScript program to compute the product of an array of integers.
// Example : const array = [1, 23, 19, 8, 5, 2]
// Expected Output : 720
/******** */






//2
// Zero is even.
// One is odd.
// For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should accept a single parameter and return a Boolean.
// Test it on 50 and 75. If you solve, See how it behaves on -1. Why? Can you think of a way to fix this?
/******** */






//3
// Using recursion, return all indexes as one string with a space between each index.
// Do not mutate the original array
let arr1 = ['i', 'chained', 'all', 'items', 'in', 'this', 'arrray']
/********* */






//4
// Reverse the string
// let str = 'abcdefg'
// Expected Output: 'gfedcba'
/******** */






//5
// Write a function called all which accepts an array and a callback function and returns true if every value in the array returns true when passed as parameter to the callback function
// const allAreLessThanSeven = all([1, 2, 9], num => {
//   return num < 7;
// });
// console.log(allAreLessThanSeven); //
//Expected output: false
// const timesFiveLessThanHundred = all([1, 2, 5], num => {
//   return num * 5 < 100;
// });
// Expected output: true






//6
// Stretch
// create a function that takes every piece of data from the object and places each piece in a single array.
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
