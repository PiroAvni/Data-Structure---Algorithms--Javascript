/**
*  ! Excerise 1 - Arrays

* TODO        Create a function that reverses a string:
* TODO        'Hi My name is Avni' .... should be :
* TODO        'ierdnA si eman iH'
*/


// solution 1
function reverse1 (str){
    return str.split('').reverse().join('')
}
console.log(reverse1('Hi My name is Avni')) // invA si eman yM iH

// Solution 2
function reverse2 (str){
    let newStr = '';
    for( let i = str.length-1 ; i >= 0; i--){
       //console.log(str[i]);
       newStr += str[i]; 
    }
    console.log(newStr)
}
reverse2('Hi My name is Avni') // invA si eman yM iH

// Solution 3
function reverse3 (str){
 if(str === '')
    return '';
  else
   //console.log(reverse3(str.substr(1)) + str.charAt(0));
    return reverse3(str.substr(1))+str.charAt(0)  
 }
 console.log(reverse3('Hi My name is Avni')) // invA si eman yM iH

 // solution 4
 function reverse4 (str){
    if(!str || str.length <2 || typeof str !== 'string'){
        return ' Not a String';
    }
    const backwards = [];
    const totalItems = str.length -1;
    for(let i = totalItems; i >=0; i--){
     backwards.push(str[i])   
    }
    return backwards.join('');
}
console.log(reverse4('Hi My name is Avni')) // invA si eman yM iH

 // solution 5 - arrow function

 const reverse5 = str => [...str].reverse().join('');
 console.log(reverse5('Hi My name is Avni')) // invA si eman yM iH

 // Solution 6 - Normal Function

 function reverse6 (str){
    return [...str].reverse().join('') 

 }
console.log(reverse6('Hi My name is Avni')) // invA si eman yM iH

// solution 7 - Normal Fuction
 function reverse7 (str){
    return [...str].reduce((acc,cur) => {
        return cur + acc;
    })
    
 }
console.log(reverse7('Hi My name is Avni')) // invA si eman yM iH

// solution 8 - Arrow Fuction

    const reverse8 = str => [...str].reduce((acc,cur) => {
        return cur + acc;
    })   
console.log(reverse8('Hi My name is Avni')) // invA si eman yM iH

// solution 9 
function reverse9 (str){
    return str.split('').sort(() => -1).join('')
} 
console.log(reverse9('Hi My name is Avni')) // invA si eman yM iH

// solution 10

function reverse10 (str =''){
    const [start = '', ...end] = str ;
    if(end.length){
        return reverse10(end)+ start
    }
    return start
}
console.log(reverse10('Hi My name is Avni')) // invA si eman yM iH

console.log('**** Excerise - 2 ****')

/**
*  ! Excerise 2 -  Sorted - Arrays

* TODO        Merge Sorted Array ([0,3,4,31] , [4,6,30]):
* TODO        '// [0, 3, 4, 4, 6, 30, 31]
*/


// Solution - 1

function MergeSortedArray (arr1, arr2) {
    const newArr = [...arr1, ...arr2];
    newArr.sort((a,b)=> a-b )   
    console.log('SOLUTION 1:',newArr)
}
MergeSortedArray ([0,3,4,31] , [4,6,30])

// Solution - 2

function MergeSortedArray2 (arr1, arr2) {
    return [...arr1, ...arr2].sort((a,b)=> 
    a-b)
}
console.log('SOLUTION 2:',MergeSortedArray2 ([0,3,4,31] , [4,6,30]))

// Solution - 3

function MergeSortedArray3 (arr1, arr2) {
    newArr=[]
    for(let i = 0; i < arr1.length; i++){  
        newArr.push(arr1[i])
    }
    for  (let j = 0; j < arr2.length; j++){ 
        newArr.push(arr2[j])
    }
    return newArr.sort((a,b)=> a-b)
} 
console.log('SOLUTION - 3:',MergeSortedArray3 ([0,3,4,31] , [4,6,30]))

console.log('*** solution - 4 - Merge Sort ***')

// Solution - 4 - Merge Sort

//merging two arrays appropriately.

function MergeSortedArray4(arr1, arr2) {
    //make a new array and have two value pointers
    let res = [],
      i = 0,
      j = 0;
  
    //sorting the first array.
    if (arr1.length > 1) {
      let min = 0;
      for (let i = 0; i < arr1.length; i++) {
        if (i !== min) {
          if (arr1[i] < arr1[min]) {
            //also swap the elements
            [arr1[i], arr1[min]] = [arr1[min], arr1[i]];
            //change the minimum
            min = i;
          }
        }
      }
    }
  
    //sorting the second array.
    if (arr2.length > 1) {
      let min = 0;
      for (let i = 0; i < arr2.length; i++) {
        if (i !== min) {
          if (arr2[i] < arr2[min]) {
            //also swap the elements
            [arr2[i], arr2[min]] = [arr2[min], arr2[i]];
            //change the minimum
            min = i;
          }
        }
      }
    }
  
    //Value comparison.
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        res.push(arr1[i]);
        i++;
      } else {
        res.push(arr2[j]);
        j++;
      }
    }
  
    //pushing the rest of arr1.
    while (i < arr1.length) {
      res.push(arr1[i]);
      i++;
    }
  
    //pushing the rest of arr2.
    while (j < arr2.length) {
      res.push(arr2[j]);
      j++;
    }
  
    return res;
  }
  
  //merge sort
  function mergeSort(arr) {
    //Best case
    if (arr.length <= 1) return arr;
  
    //splitting into halves
    let mid = Math.ceil(arr.length / 2);
  
    let arr1 = arr.slice(0, mid);
  
    let arr2 = arr.slice(mid);
  
    let arr1_subarrays = [],
      sorted_arr1_subarrays = [];
  
    let arr2_subarrays = [],
      sorted_arr2_subarrays = [];
  
    //loop through array 1 making subarrays of two elements
    for (let i = 0; i < arr1.length; i += 2) {
      arr1_subarrays.push(arr1.slice(i, i + 2));
    }
  
    //loop through array 2 making subarrays of two elements.
    for (let i = 0; i < arr2.length; i += 2) {
      arr2_subarrays.push(arr2.slice(i, i + 2));
    }
  
    // sorting each subarray of arr1.
    for (let i = 0; i < arr1_subarrays.length; i += 2) {
      let result = merge(arr1_subarrays[i], arr1_subarrays[i + 1]);
      result.forEach((value) => sorted_arr1_subarrays.push(value));
    }
  
    // sorting each subarray of arr2.
    for (let i = 0; i < arr2_subarrays.length; i += 2) {
      let result = merge(arr2_subarrays[i], arr2_subarrays[i + 1]);
      result.forEach((value) => sorted_arr2_subarrays.push(value));
    }
  
    let result = merge(sorted_arr1_subarrays, sorted_arr2_subarrays);
      
    return result;
  }
  
  console.log('SOLUTION 4:',MergeSortedArray4 ([0,3,4,31] , [4,6,30]));

// Solution - 5

function mergeSortedArrays5(array1, array2){
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;
    
    //We should actually move these 2 if statements to line 2 so that we do the checks before we do assignments in line 3 and 4!
    if(array1.length === 0) {
      return array2;
    }
    if(array2.length === 0) {
      return array1;
    }
  
    while (array1Item || array2Item){
     if(array2Item === undefined || array1Item < array2Item){
       mergedArray.push(array1Item);
       array1Item = array1[i];
       i++;
     }   
     else {
       mergedArray.push(array2Item);
       array2Item = array2[j];
       j++;
     }
    }
    return mergedArray;
  }
  
  console.log('SOLUTION 5:',mergeSortedArrays5([0,4,31], [3,4,6,30]));
  
console.log('*** bubble sort ***')
//  Soution - 6 - bubbleSort

  function mergeSortedArrays6(arr1, arr2){
    let newArray = [...arr1, ...arr2]
    

    //Outer pass
    for(let i = 0; i < newArray.length; i++){
        //console.log('ARRAY:',newArray)
        //console.log('Outer',newArray[i])

        //Inner pass
        for(let j = 0; j < newArray.length - i - 1; j++){
            //console.log('inner:',newArray[j])

            //Value comparison using ascending order
            //console.log(newArray)
            if(newArray[j + 1] < newArray[j]){

                //Swapping
                [newArray[j + 1],newArray[j]] = [newArray[j],newArray[j + 1]]
            }
        }
    };
    return newArray;
};

console.log('SOLUTION 6:',mergeSortedArrays6([0,4,31], [3,4,6,30]));


console.log('*** Insertion Sort ***')
// SOLUTION - 7 - InsertionSort

function mergeSortedArrays7(arr1, arr2){
    let newArray = [...arr1, ...arr2]
    console.log('ORIGINAL ARRAY:', newArray)

for(let i = 1; i < newArray.length;i++){
    //console.log(newArray)
    //Go through the elements behind it.
    for(let j = i - 1; j > -1; j--){
        
        //value comparison using ascending order.
        if(newArray[j + 1] < newArray[j]){
            //console.log('compare swap:',newArray);

            //swap
            [newArray[j+1],newArray[j]] = [newArray[j],newArray[j + 1]];
            //console.log('final:',newArray)

        }
    }
};
return newArray;
}
console.log('SOLUTION 7:',mergeSortedArrays7([0,4,31], [3,4,6,30]));

console.log('***** TWO SUM *****')

