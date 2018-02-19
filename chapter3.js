//Write a function min that takes two arguments and returns their minimum.

function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Define a recursive function isEven corresponding to this description.
//The function should accept a number parameter and return a Boolean.

// function isEven(num) {
//   if (num / 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
function isEven(num) {
    if (num === 2)
      return true;
    else if (num === 1)
      return false;
    else
      if (num > 0){
        return isEven(num - 2);
      } else {
        return isEven(num + 2);
      }

}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-10));
// → ??

function findSolution(target) {
  function find(current, history) {
    if (current == target)
      return history;
    else if (current > target)
      return null;
    else
      return find(current + 5, "(" + history + " + 5)") ||
             find(current * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

