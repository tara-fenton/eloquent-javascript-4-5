var listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[2 - 1]);
// → 3


//The first, reverseArray, takes an array as argument and produces a new array
//that has the same elements in the inverse order.
function reverseArray(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i])
  }
  return newArray;
}


//The second, reverseArrayInPlace, does what the reverse method does:
//it modifies the array given as argument in order to reverse its elements.
//Neither may use the standard reverse method.
function reverseArrayInPlace(array) {
  var half = Math.floor(array.length / 2);
  for (var i = 0; i < half; i++){
    var element = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = element;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


//Write a function arrayToList that builds up a data structure like the previous one
//when given [1, 2, 3] as argument, and write a listToArray function that produces an array from a list.
//Also write the helper functions prepend, which takes an element and a list and creates a new list
//that adds the element to the front of the input list, and nth, which takes a list and a number and
//returns the element at the given position in the list, or undefined when there is no such element.

//totally confused!

function arrayToList(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push({value: array})
  }
  return newArray;
}
function listToArray(array) {

}
function prepend() {

}
function nth() {

}
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//deepEqual

function deepEqual(x, y) {
  for (var property1 in x) {
    console.log(property1)
  }


}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
