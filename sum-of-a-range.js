//Write a range function that takes two arguments, start and end, and returns an array
//containing all the numbers from start up to (and including) end.

function range(start, end, step){
  var array = [];
  if (step === undefined) { step = 1; }

  var i = start;
  if (step > 0) {
    // positive step
    while (i <= end) {
      array.push(i);
      i = i + step;
    }
  } else {
    // negative step
    while (i >= end) {
      array.push(i);
      i = i + step;
    }
  }

  return array;
}

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
//Run the previous program and see whether it does indeed return 55.

function sum(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

//As a bonus assignment, modify your range function to take an optional third argument
//that indicates the “step” value used to build up the array. If no step is given,
//the array elements go up by increments of one, corresponding to the old behavior.
//The function call range(1, 10, 2) should return [1, 3, 5, 7, 9].
//Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

console.log(range(1, 10, 2));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
