


/* function solution (Num){ */
 /*    let maxGap1 = 0 */
 /*    let oneFound =false */
 /*    let counter = 0 */
 /*     */
 /*   let arr=[]; */
 /*   console.log('Empty array:',arr) */

 /*   //if (Num === parseInt(Num, 10) && Num>=1 && Num <=2147483 647){
 /*       // gap = 0; */

 /*       let arr = Num.toString(2).split('') */
 /*                 */
 /*             console.log("Array Conversion:",arr) */
 /*             */
 /*    }    */

 /*    const allZero = ( arr.every(i => ) */

 /*        arr.forEach (function (e) { */
 /*        console.log(arr) */
 /*         if(e!= 0 ){ */
 /*            console.log(e.length) */
 /*            oneFound = true */
 /*            counter = 0  */
 /*        } */
 /*            else if (oneFound){ */
 /*            counter++ */
 /*            console.log('counting',counter) */
 /*            if(counter > maxGap1){ */
 /*                maxGap1 = counter */
 /*            } */
 /*            */
 /*           return maxGap1 */
 /*        }    */
 /*      }); */
 /*    console.log(maxGap1) */
 /*  } */
 /* solution(Num)  */


// let N = 1042;
// function solution(N) {
//     // write your code in JavaScript (Node.js 8.9.4)

//     let binary = N.toString(2);
//     console.log(N.toString(2))
//     console.log(binary.indexOf('1')+1)
//     let gap = binary.slice(binary.indexOf('1') + 1, binary.lastIndexOf('1'));
//     let count = gap.split('1').map(e => e.length);
//   console.log(binary)
//   console.log(gap)
//   console.log(count)
//     return count.length > 0 ? Math.max(...count) : 0; 
// }
// console.log(solution(N))


// let gap;
// let N = 32;
// function solution(N) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     if (N === parseInt(N, 10) && N>=1 && N<=2147483647){
//         gap = 0;

//         //turn it to binary
//         const binary = N.toString(2)
//         //turn it into an array
//         let NArray = binary.split('')
//         findGap(NArray)
//     }
//     return gap;
    
// }



// function evalGap(distance){
//     if (distance > gap){
//         gap = distance;
//     }
// }

// function findGap(binaryArray) {
//     if (binaryArray.indexOf('1') == -1){
//         return gap
//     } 
//     else {
//         index1 = binaryArray.indexOf('1');
//         evalGap(index1)

//         binaryArray = binaryArray.slice(index1+1);
//         index2 = binaryArray.indexOf('1')

//         if (index2 !== -1) {

//             evalGap(index2)
//             binaryArray = binaryArray.slice(index2+1);
//             findGap(binaryArray)
//         } else {
//             if (gap === 0) {
//                 gap = 0
//             }
//         }
//     }
//     console.log()
// }
// solution(N)

// let numbers = [1, 2, 2]
// let totalSum = 0;
// function squareSum(numbers){

//      let sum = 
//         numbers.map((i) => i * i)
//         .reduce((pv,cv)=> pv +cv, totalSum);
//         return sum
//      }
//     console.log(squareSum(numbers)) 
 



// function outter (name){
//     console.log('hello' +  name);
// }
// function inner (cbf){
//   let name = 'Avni';
//   cbf(name);
// }

// inner(outter)

// function outfunc(number) {
//   number = number % 2 != 0;
//   console.log('2:',number)

//   return number
 
// }

// function innerfunc(numbers, fn) {
//   let results = [];
//   for (const number of numbers) {
//     console.log('1:', number)
//     if (fn(number)) {
//       results.push(number);
//       console.log('3:',results)
//       console.log('array length:',results.length)
//     }
//   }
//   return results;
// }
// let numbers = [1, 2, 4, 7, 3, 5, 6];

// let evenNum = innerfunc(numbers,(number)=> number % 2 ==0);

// console.log('odd No:',innerfunc(numbers, outfunc));
// console.log('even No:',evenNum);

// function greeting(name) {
//   alert('Hello ' + name);
// }

// function processUserInput(callback) {
//   var name = prompt('Please enter your name.');
//   callback(name);
// }

// processUserInput(greeting);
// let Num =1042; 

// console.log('Binary;',Num.toString(2))

// function solution (N){
//   let result = []
//   let counter = 0
//   while( N >0){
//     counter.push (N %2);
//     console.log(counter)
//     N =Math.floor(N/2)
//     console.log(N)
//     }
//     while(counter.top>0){
//       result += counter.pop()
//     }
//     return result;
   
//   };
  
//   //console.log(counter)
// solution(1042)

// function decToBinary(n)
// {
//     // Size of an integer is assumed to be 32 bits
//     for (i = 31; i >= 0; i--) {
//         var k = n >> i;
//         if ((k & 1) > 0)
//             document.write("1");
//         else
//             document.write("0");
//     }
// }

// // driver code
// var n = 32;
// decToBinary(n);

// function decToBinary(n)
// {
//     // array to store binary number
//     let binaryNum = new Array(32);
 
//     // counter for binary array
//     let i = 0;
//     while (n > 0) {
 
//         // storing remainder in binary array
//         binaryNum[i] = n % 2;
//         n = Math.floor(n / 2);
//         i++;
//     }
 
//     // printing binary array in reverse order
//     for (let j = i - 1; j >= 0; j--)
//         console.log(binaryNum[j]);
// }
 
// // Driver program to test above function
//     let n = 1042;
//     decToBinary(n);


    // function largestOfFour(arr) {
    //     const results = [];
    //     for (let i = 0; i < arr.length; i++) {
    //       let largestNumber = arr[i][0];
    //       console.log('1:',arr)
    //       console.log('1:',largestNumber)
    //       for (let j = 1; j < arr[i].length; j++) {
    //         console.log('3:',arr[i])
    //         if (arr[i][j] > largestNumber) {
    //           largestNumber = arr[i][j];
    //         }
    //       }
    //       results[i] = largestNumber;
    //       console.log(results[i])
    //     }
      
    //     return results;
    //   }
      
      
      
    //   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

    
   
  
    

// function letter (str){
//   const array ={'a':1, 'v':2,'n':3,'i':4};
//     console.log('Full Array:',array)
//     console.log('Array Split:',str.split(''))
  
//     const strArray = str.toLowerCase().split('')
//     .reduce((prev , cur)=>
//       prev + (array[cur] || 0) ,0// initinal value = 0
//       );


//      console.log(strArray)
     

//     }
    
//   letter('cabbage')

// let arr= [23,45,63,1]

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     const min = Math.min(...Array, ...Array2)
//     console.log(min)
//   };
// }


// 1. fusc(0) = 0
// 2. fusc(1) = 1
// 3. fusc(2 * n) = fusc(n)
// 4. fusc(2 * n + 1) = fusc(n) + fusc(n + 1)
// let n = 10;
// function fusc(n){
//   console.log(n)
//   if( n===0)
//     return 0
//   if(n ===1) 
//     return 1
//   if (n%2 ===0) 
//   return (fusc(n/2))
//   //console.log(fusc(n/2))
//   if (n%2 !==0)return fusc((n-1)/2) + fusc((n-1)/2 + 1)
//  // console.log(fusc(n))
//   //console.log(fusc((n-1)/2) + fusc((n-1)/2 + 1))
// }

// console.log(fusc(n))

// function invert(array) {
// array.sort((a, b) =>
//   { return b - a })
  
//   console.log(array.length-1)

// }


// invert([4,6,2,5,6])


// function reverseArr(input) {
//   var ret = [];
//   for(var i=0; i < input.length; i++){
//       ret.push(input--) 
//   } 
//   console.log(ret)
//   return ret;
 
// }

// let a = [3,5,7,8]
// let b = reverseArr(a);

// **********************************************

// **** Exam Question: ****
// Given 2 arrays, create a function that let's a user know (true/false) whether    these two arrays conatain any common items.
// For Example:
// const array1 = ['a', 'b', 'c','x'];
// const array2 = ['z', 'y', 'i'];
// should return false.
// -----------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true.
 
// Inputs:
// 2 parameters- arrays - no size limits

// Outputs:
// return true or false

// Brute Force - May be not the best solutions - Not readable or efficient 
//  Possible a nested for loops - comparing two arrays 


/* const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];

function containCommonItems ( arr1, arr2){
  for( let i =0 ; i < arr1.length; i++){
    for(let j = 0; j <arr2.length; j++){
      console.log(`${arr1[i]} : ${ arr2[j]}`)
      console.log(`index of arr1 : ${[i]}, index of arr2 :${[j]}`)
      if (arr1[i] === arr2[j]){
        return true;
      }
    }
  }
  return false
}
console.log(containCommonItems(array1,array2))
containCommonItems(array1, array2) */

// Big O =  O(a*b) = 0(n^2) - Time Complexity
// 0(1) - Space Complexity


// Another Solution 
/*const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'a'];

// **********************

function containCommonItems2(arr3, arr4){
  // loop through arr3 and create object where properties === item in the array

  // can we assusme 2 params?
  // How to break the code - test the code - how you can improve the code
 
  let map ={}; // decalre an empty object 
  for (let i = 0; i < arr3.length ; i++) {
     //console.log(arr3[i])
      if(!map[arr3[i]]) {
        //console.log(!map[arr3[i]])
        const item = arr3[i]; // array : value
        //console.log(`item = ${item}`)
        map[item] = true //  assigning true to the map item 
        //console.log(`map item = ${item}  : ${map[item]}`)
        
      }
    }
   // console.log('object :', map)
  // loop through second array and scheck if item in second array exists on created object.
    for (let j = 0; j < arr4.length; j++) {
     // console.log(arr4[j])
      if(map[arr4[j]]){
        //console.log('arr4 :', arr4[j])
          return true;
      }
      
    }
      return false;
}
console.log(containCommonItems2(array3, array4));
containCommonItems2(array3, array4);
// 0(a +b) = 0(n) = better Time Complexity
// 0(a) Space Complexity 

// ****************************
function containCommonItems3( arr5, arr6){
  return arr5.some(item => arr6.includes(item))
}
console.log(containCommonItems3(array3, array4));
containCommonItems3(array3, array4); */

// ****** Exercise 2 ********
console.log('Excerise 2:')
// Collection of numbers, find the matching pair that is == to the given sum. 
// e,g:
// Collection of Numbers [1, 2, 3, 9] , sum = 8,  == there is NO matching pair = sum of 8
// Collection of Numbers [1, 2, 4, 4] , sum = 8 == Matching pair are [4,4]= sum of 8


// Naive
// function hasPairWithSum(arr, sum){
//   var len = arr.length;
  
//   for(var i = 0; i < len-1; i++){
//     console.log(`index of arr1 : ${[i]}`)
//      for(var j = i + 1; j < len; j++){
//       console.log(` index of arr2 :${arr[j]}`)

//         if (arr[i] + arr[j] === sum)
//         console.log(arr[i] + arr[j] === sum)
//           console.log(`summer ${arr[i]} + ${arr[j]}`)

//             return true;
//      }
//   }
//   return false;
// }
// console.log(hasPairWithSum([6,4,3,2,1,7], 100))
// hasPairWithSum([6,4,3,2,1,7], 9)

console.log(' better code')

// Better
// function hasPairWithSum2(arr, sum){
//   const mySet = new Set();
//   const len = arr.length;
//   for (let i = 0; i < len; i++){
//     console.log(arr[i])
//     if (mySet.has(arr[i])) {
//       console.log('mySet',mySet)

//       return true;
//     }
//     mySet.add(sum - arr[i]);
//     console.log('set',mySet)
//   }
//   return false;
// }
// console.log(hasPairWithSum2([6,4,3,2,1,7], 9))
// hasPairWithSum2([6,4,3,2,1,7], 9)

console.log('****** Better ******')

function hasPairWithSum2(arr, sum){
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
console.log(hasPairWithSum2([6,4,3,2,1,7], 12))
hasPairWithSum2([6,4,3,2,1,7], 12)