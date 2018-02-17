//function that takes a string as its only argument and
//returns a number that indicates how many uppercase “B” characters are in the string
function countBs(str) {
  var bCount = 0;
  for (var i = 0; i < str.length; i++){
    if (str.charAt(i) === "B") { bCount++; }
  }
  return bCount;
}

console.log(countBs("BBC"));

//can you use a for each on a string?
