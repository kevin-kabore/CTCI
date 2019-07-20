/* 

    Given two strings, write a method to decide if one is a permutation of the other.

*/


function checkPermutations(string1, string2) {
    if(string1.length !== string2.length) return false;

    let charMap = new Map();

    for(let i = 0; i < string1.length; i++) {
        let char = string1[i];
        if(!charMap.has(char)) {
            charMap.set(char, 1);
        } else {
            charMap.set(char, charMap.get(char) + 1);
        }
    }

    for(let j = 0; j < string2.length; j++) {
        let char = string2[j];
        if(!charMap.has(char)) return false;

        charMap.set(char, charMap.get(char) - 1);

        if(charMap.get(char) === 0) charMap.delete(char);
    }

    let isPermutation = charMap.size === 0 ? true : false;
    return isPermutation;

}

checkPermutations('abcde', 'ecdba'); // true
checkPermutations('abcde', 'ecdbg'); // false
checkPermutations('abcde', 'ecdbge'); // false

