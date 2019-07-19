function URLify(s) {
    let strArr = [];

    for(var i = 0; i < s.length; i++) {
        if(s[i] === ' ' && s[i + 1] === ' ') break;
        
        if(s[i] === ' ' && i != s.length - 1) {
            strArr.push('%20');
            i++;
        }

        strArr.push(s[i])
    }
    return strArr.join('');
}

URLify('Kevin Kabore   ');


function replaceSpaces(str, length) {
    let spaces = 0, index, i = 0, strArr = str.split('');

    for(i; i <length; i++) {
        if(strArr[i] === ' ') spaces++;
    }

    index = length + spaces * 2;
    if(length < strArr.length) strArr[length] = '\0'; // ends array

    for(i = length -1; i >= 0; i--) {
        if(strArr[i] === ' ') {
            console.log(strArr[index -1]);
            strArr[index -1] = '0';
            console.log(strArr[index -2]);
            strArr[index -2] = '2';
            console.log(strArr[index -3]);
            strArr[index -3] = '%';

            index = index-3;
        } else {
            strArr[index -1] = strArr[i];
            index--;
        }
    }

    return strArr.join('');
}

replaceSpaces('Mr John Smith   ', 13);