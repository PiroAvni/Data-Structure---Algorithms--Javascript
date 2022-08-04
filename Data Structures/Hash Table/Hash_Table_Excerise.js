console.log ('------- Hash Table Excerises --------')
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

console.log('Duplicate Numbers',firstRecurringCharacter([2,1,1,2,3,5,1,2,4]))
console.log('Unique Numbers',firstRecurringCharacter([2,3,4,5]))
console.log('Unique Numbers',firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))

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
    } return undefined
}
console.log('Duplicate Numbers',firstRecurringCharacter2([2,1,1,2,3,5,1,2,4]))
console.log('Unique Numbers',firstRecurringCharacter2([2,3,4,5]))
console.log('Unique Numbers',firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]))

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

console.log('Duplicate Numbers1 = ',firstRecurringCharacter3([2,1,1,2,3,5,1,2,4, 0, 0]))
console.log('Duplicate Numbers2 =',firstRecurringCharacter3([2,2,1, 0, 0 ,3,5,1,2,4]))
console.log('Unique Numbers',firstRecurringCharacter3([2,3,4,5]))
console.log('Duplicate Number3 =',firstRecurringCharacter3([2,5,5,2,3,5,1,2,4]))

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
console.log('avni')