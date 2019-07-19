/*
    Implement an algorithm to determine if a string has all unique characters
    What if you cannot use additional data structures?
*/

function isUnique(string) {
    if(!string.length) throw ('Empty string');

    let visited = new Set(),
        current;

    for (let i = 0; i < string.length; i++) {
        if(visited.has(string[i])) return false;

        visited.add(string[i]);
    }

    return true;
}

// isUnique('cats');
// isUnique('the dog loves');
// isUnique('');

var a = isUnique('cats');
var e = true;
var desc = 'one unique word';
assertEquals(a, e, desc)

a = isUnique('the dog loves');
e = false;
desc = 'one sentence';
assertEquals(a, e, desc);

a = isUnique('');
e = 'Empty string';
desc = 'Empty string';
assertEquals(a, e, desc);



function assertEquals(actual, expected, desc) {
    let a = actual;
    if(a !== expected) {
        console.log(desc + ' FAIL: ' + a + ' !== ' + expected);
    } else {
        console.log(desc + ' PASS');
    }
}