console.log ('------- Hash Table Excerises --------')

console.log('firstRecurringCharacter-exercise')

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

console.log('firstRecurringCharacter-exercise -- Solution 1')
function firstRecurringCharacter(input) {
    let arr = input.sort()
    .filter((item, index) => 
    index !== input.indexOf(item))          
    return arr[0]
    //console.log (dup)
    //return input.


    // check array for first duplicate char
    // loop through array 
    // compare items

    //check array is unqiue?
}

console.log('Duplicate Numbers',firstRecurringCharacter([2,1,1,2,3,5,1,2,4])) // 1
console.log('Unique Numbers',firstRecurringCharacter([2,3,4,5])) // underfined
console.log('Unique Numbers',firstRecurringCharacter([2,5,5,2,3,5,1,2,4])) // 2

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2


console.log('firstRecurringCharacter-exercise -- Solution 2')
function firstRecurringCharacter2(input) {
    for(let i =0; i<input.length; i++){
    //console.log('input i =',input[i])
        for( let j = i + 1; j< input.length; j++){
          //console.log('item j =', input [j]) 
            if (input [i] === input[j]){
                return input[i]
          } 
        }
    } 
    return undefined
}
console.log('Duplicate Numbers',firstRecurringCharacter2([2,1,1,2,3,5,1,2,4])) // 2
console.log('Unique Numbers',firstRecurringCharacter2([2,3,4,5])) // underfined
console.log('Unique Numbers',firstRecurringCharacter2([2,5,5,2,3,5,1,2,4])) // 2

console.log('firstRecurringCharacter-exercise -- Solution 3')

function firstRecurringCharacter3(input) {
    let map = {};
    for (let i = 0; i< input.length; i++){
       // console.log('loop:', input[i])
        if(map[input[i]] !== undefined){
            //console.log('map',input[i])
            return input[i]
            
        }else{
            map[input[i]] = i;
            //console.log('map = i',input[i]=1)
        }
    }
    return undefined
}

console.log('Duplicate Numbers1 = ',firstRecurringCharacter3([2,1,1,2,3,5,1,2,4, 0, 0])) // 1
console.log('Duplicate Numbers2 =',firstRecurringCharacter3([2,2,1, 0, 0 ,3,5,1,2,4])) // 2
console.log('Unique Numbers',firstRecurringCharacter3([2,3,4,5])) // underfined
console.log('Duplicate Number3 =',firstRecurringCharacter3([2,5,5,2,3,5,1,2,4])) // 5

console.log('firstRecurringCharacter-exercise -- Solution 4')

function firstRecurringCharacter4(input) {
    //Outer pass
    for(let i = 0; i < input.length; i++){
        //console.log('outter:', input[i])
        //Inner pass
        for(let j = 0; j < input.length - i - 1; j++){
            //console.log('inner', input[j])
            //Value comparison using ascending order
            if(input[j + 1] < input[j]){
                //Swapping
                [input[j + 1],input[j]] = [input[j],input[j + 1]]
                    //console.log(input[j+1], input[j])
                    //console.log('swap=', input)
            }   
        }
    }
    let arr = input
        console.log('arr',arr)
        for(let i =0; i<arr.length; i++){
            //console.log('input i =',input[i])
            for( let j = i + 1; j< arr.length; j++){
              //console.log('item j =', input [j]) 
                if (arr [i] === arr[j]){
                    return arr[i]
              } 
             
            }
        } 
    return undefined
}

console.log('Duplicate Numbers1 = ',firstRecurringCharacter4([2,1,1,2,3,5,1,2,4, 0, 0])) // 0
console.log('Duplicate Numbers2 =',firstRecurringCharacter4([2,2,1, 0, 0 ,3,5,1,2,4])) // 0
console.log('Unique Numbers',firstRecurringCharacter4([2,3,4,5])) // undefined
console.log('Duplicate Number3 =',firstRecurringCharacter4([2,5,5,2,3,5,1,2,4,1])) // 1
console.log('Duplicate Number3 =',firstRecurringCharacter4([2,5,5,2,3,5,1,2,4,1])) // 1

console.log('firstRecurringCharacter-exercise -- Solution 5')

function firstRecurringCharacter5(input) {
let s = new Set;
//console.log('set=', input.find(i => s.has(i) || !s.add(i)))
//console.log(s)
return input.find(i => s.has(i) || !s.add(i))
}

console.log('Duplicate Numbers1 = ',firstRecurringCharacter5([2,1,1,2,3,5,1,2,4, 0, 0])) // 1
console.log('Duplicate Numbers2 =',firstRecurringCharacter5([2,2,1, 0, 0 ,3,5,1,2,4])) // 2
console.log('Unique Numbers',firstRecurringCharacter5([2,3,4,5])) // undefined
console.log('Duplicate Number3 =',firstRecurringCharacter5([2,5,5,2,3,5,1,2,4,1])) // 5




console.log('Make Array Zero by Subtracting Equal Amounts')
/** 
You are given a non-negative integer array nums. In one operation, you must:

Choose a positive integer x such that x is less than or equal to the smallest non-zero element in nums.
Subtract x from every positive element in nums.
Return the minimum number of operations to make every element in nums equal to 0.

 

Example 1:

Input: nums = [1,5,0,3,5]
Output: 3
Explanation:
In the first operation, choose x = 1. Now, nums = [0,4,0,2,4].
In the second operation, choose x = 2. Now, nums = [0,2,0,0,2].
In the third operation, choose x = 2. Now, nums = [0,0,0,0,0].
Example 2:

Input: nums = [0]
Output: 0
Explanation: Each element in nums is already 0 so no operations are needed.
*/

console.log('Make Array Zero by Subtracting Equal Amounts - Solution')

let minimumOperations = function(nums) {
   nums.sort((a,b)=> a-b)
   //console.log(nums)
    let count = 0
    let x =0
    
    for(let i = 0; i < nums.length; i++){

        if(nums[i] !=0){
            x = nums[i]
            count++
            for(let j = i; j < nums.length; j++)
             nums[j]= nums[j]- x
             //console.log(count)
             //console.log(nums)
            }
        }
    
    return count
};

console.log(minimumOperations([1,5,0,3,5])) // 3
console.log(minimumOperations([0])) // 0
console.log(minimumOperations([9,6,4,5,2])) // 5

console.log('solution 2')


var minimumOperations2 = function(nums) {
    nums.sort((a,b)=>a-b);
    let res = 0;
    let sum = 0;
    for(let i=0;i<nums.length;i++){
        if(!nums[i]) continue;
        if(nums[i]){
            if(nums[i]-sum>0){
                res++;
                sum+=nums[i]-sum;
            }
            nums[i] = nums[i]-sum;
        }
    }
    return res;
};

console.log(minimumOperations2([1,5,0,3,5])) // 3
console.log(minimumOperations2([0])) // 0
console.log(minimumOperations2([9,6,4,5,2])) // 5


console.log('solution 3')

const minimumOperations3 = function(nums) {
 
      
      const set = new Set(nums);
      let ans = set.size;
      if (set.has(0)) return ans - 1;
      return set.size;
    };

    console.log(minimumOperations3([1,5,0,3,5])) // 3
    console.log(minimumOperations3([0])) // 0
    console.log(minimumOperations3([9,6,4,5,2])) // 5


    console.log('solution 4')
    const minimumOperations4 = (nums) => {
        let answer = 0;
        let len = nums.length;
        nums.sort((a, b) => a - b);
        for (let i = 0; i < len && nums[len - 1] !== 0;) {
          while (nums[i] === 0 && i < len) {
            i++;
          }
          let minus = nums[i];
          for (let j = i; j < len; j++) {
            nums[j] -= minus;
            if (nums[j] < 0) nums[j] = 0;
          }
          answer++;
        }
        return answer;
      };
console.log(minimumOperations4([1,5,0,3,5])) // 3
console.log(minimumOperations4([0])) // 0
console.log(minimumOperations4([9,6,4,5,2])) // 5