//Define a recursive function isEven corresponding to this description.
//The function should accept a number parameter and return a Boolean.

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
console.log(isEven(-1))
