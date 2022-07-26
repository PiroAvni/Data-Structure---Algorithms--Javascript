console.log('**** Hash Function ****')

/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
 function hashCode(str) {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }

    return hash;
}

console.log(hashCode('hello'))


console.log('**** Hash Function ****')

function func(string) {
    var hash = 0;
    if (string.length == 0) return hash;
    for (x = 0; x <string.length; x++) {
    ch = string.charCodeAt(x);
            hash = ((hash <<5) - hash) + ch;
            hash = hash & hash;
        }
    return hash;
    }
    var str = "Happymoments"
    console.log(func(str))


console.log('**** Hash ****')

let user = {
    age: 54,
    name: 'Avni',
    magic: true,
    scream: function (){
        console.log('ahhhhhhhhhh');
    }
}
// access
console.log(user.age) //54 - 0(1) 
// access - insert
user.spell = 'abra kadabra' // 0(1)
console.log(user)
console.log(user.scream()) // 0(1)