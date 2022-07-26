console.log('***** Maximun Subarray *****')

// Maximun Subarray

// Given an integer array nums, find the contiguous subarray 
//(containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.
/** 

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
 */

console.log('***** Maximun Subarray - solution 1 *****')
let maxSubArray = function(nums) {

    // Input = Arra
    let sum = 0
    let max = 0
   
    // LOOP THROUGH THE ARRAY
     for(let item of nums){
    console.log('item:',item)
   
         // add item to sum
        sum += item
   console.log('SUM:',sum ,'item:', item)
    console.log('Sum 1:', sum)
//console.log('item:', item)
         // find the max sum 
        max = Math.max(max ,sum)
        //console.log('max:',max)
        {
            if (sum < 0) sum = 0
            console.log('zero:',sum)
        }
   }
   return max
    // Output = MAX SUM
  }
console.log('Sum Total 1:', maxSubArray([-1, 1, -5, 20, -15, 5, 8 ,3, -10, 5 ]) ); // 21

// console.log('solution - 1:',maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) )// 6 
// console.log('Sum Total 1:', maxSubArray([-1, 2, 3, -9]) ); // 5
// console.log('Sum Total 1:', maxSubArray([-1, 2, 3, -9, 11]) ); // 11
// console.log('Sum Total 1:', maxSubArray([-2, -1, 1, 2]) ); // 3
// console.log('Sum Total 1:', maxSubArray([100, -9, 2, -3, 5]) ); // 100
// console.log('Sum Total 1:', maxSubArray([1, 2, 3]) ); // 6
// console.log('Sum Total 1:', maxSubArray([-1, -2, -3]) ); // 0
// console.log('Sum Total 1:', maxSubArray([-1, -2, 3, -2, 1, 5]) ); // 7
// console.log('Sum Total 1:', maxSubArray([-100, 100, -50, -200, 1, 5, 80, -5, 5 ]) ); // 7




/* 
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // for each item of arr
        console.log('item;',item)
        
      partialSum += item; // add it to partialSum
      console.log('part:',partialSum)
      maxSum = Math.max(maxSum, partialSum); // remember the maximum
       console.log('maxsum:',maxSum)
      if (partialSum < 0) partialSum = 0; // zero if negative
    }
  
    return maxSum;
  }
  
  console.log('Sum Total 1:', getMaxSubSum([-1, 2, 3, -9]) ); // 5
//   console.log('Sum Total 1:', getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
//   console.log('Sum Total 1:', getMaxSubSum([-2, -1, 1, 2]) ); // 3
//   console.log('Sum Total 1:', getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
//   console.log('Sum Total 1:', getMaxSubSum([1, 2, 3]) ); // 6
//   console.log('Sum Total 1:', getMaxSubSum([-1, -2, -3]) ); // 0
//   console.log('Sum Total 1:', getMaxSubSum([-2,1,-3,4,-1,2,1,-5,4]) ); // 6
//   console.log('Sum Total 1:', getMaxSubSum([-1, -2, 3, -2, 1, 5]) ); // 7

  console.log('***** Maximun Subarray - solution  2*****')
function maxSum(arr){
    let a1 = 0
    let a2 = arr[0]
    arr.forEach((i,a) => {
      a1 = Math.max(i, a1 + i)
      a2 = Math.max(a2, a1)
    })
    return a2
  }
  console.log(maxSum([-2,1,-3,4,-1,2,1,-5,4])) // 6
  console.log(maxSum([-1])) // -1
  console.log(maxSum([-1,-2])) // -1
  console.log('max',maxSum([-1, -2, 3, -2, 1, 5])) //should return 7

  console.log('***** Maximun Subarray - solution 3 *****')

  function getMaxSubSum1(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
  }
  
  console.log('GET SUM2:',getMaxSubSum1([-1, 2, 3, -9]) ); // 5
  console.log('GET SUM2:',getMaxSubSum1([-1, 2, 3, -9, 11]) ); // 11
  console.log('GET SUM2:',getMaxSubSum1([-2, -1, 1, 2]) ); // 3
  console.log('GET SUM2:',getMaxSubSum1([1, 2, 3]) ); // 6
  console.log('GET SUM2:',getMaxSubSum1([100, -9, 2, -3, 5]) ); // 100
  console.log('Sum Total 1:', getMaxSubSum1([-2,1,-3,4,-1,2,1,-5,4]) ); // 6
  console.log('Sum Total 1:', getMaxSubSum1([-1, -2, 3, -2, 1, 5]) ); // 7 */

 