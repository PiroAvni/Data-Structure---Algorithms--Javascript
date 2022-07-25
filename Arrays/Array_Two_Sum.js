// TWO SUM
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
/** 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/
// solution - 1
function sumTwo( num, target){
    // create an empty array
    for (let i =0 ; i < num.length; i++) {
        // console.log(num[i])
        for(let j = 0; j < num.length; j++){
             if(num[i] + num[j] === target){
                    console.log( 'SUM TWO - SOLUTION 1:',[i,],[j] )  
                return [i],[j]
            } 
        }
        //return false
    }
}
sumTwo([2, 4, 2, 6],10)

// solution - 2
console.log('****** Better ******')

function sumTwo2(arr, sum){
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++){
    
    console.log('Array element:', arr[i])
    
    if (mySet.has(arr[i])) {
      console.log('arr;',arr[i])
      
      console.log('MYSET =',mySet)
      
      return true;
    }
    mySet.add(sum - arr[i]);
    
    console.log('SUM = ',sum)
    console.log('ARRAY:',arr[i])
    console.log('SUM = ', sum - arr[i])
    console.log('SET =', mySet)
  }
  return false;
}
console.log('SUM TWO - BETTER SOLUTION:',sumTwo2([6,6,3,2,1,7], 12))
sumTwo2([6,4,3,2,1,7], 12)
