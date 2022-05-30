function hasTargetSum(array, target) {
  const seenNumbers = {}

  for (const number of array) {
    const complement = target - number
    if (seenNumbers[complement]) return true
    seenNumbers[number] = true
  }

  return false
}


// function hasTargetSum(array, target) {
//   for (let  i = 0; i < array.length; i++) {
//     // n steps
//     const complement = target - array[i]
//     for (let j = i + 1; j < array.length; j++){
//       //n * n steps
//       if(array[j] === complement) return true
//     }
//   }
//   return false
// }

/* 
  Write the Big O time complexity of your function here
  runtime: O(n*n)
  space: O(n)
*/

/* 
  Add your pseudocode here
  create an object to keep track of the numbers weve already seen
  hasTargetSum([22, 19, 4, 6, 30], 25)
  iterate through each number in the array
    for the current num, identify a complement that adds to the target (complement = target - num)
    check if any key on our object is the complement
      if so return true
      otherwise add that number to the object

  if i get to the end of the array, return false
*/

/*
  Add written explanation of your solution here
  make a function `hasTargetSum` that checks if 2 numbers from the array
  add up to some target. for example, if i have an array `[1,2,3,4]`
  and the target is `6` i should return true because 2 + 4 add up to 6.
  for each nu,ber check if there's a number that adds up to the target.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
