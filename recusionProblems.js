//1.
function product(arr) {
    if (arr.length === 0) {
        return 1;
    }
    else {
        return arr[0] * product(arr.slice(1));
    }
}

//2.
function longest(words) {
    if (words.length === 0) {
        return 0;
    }

    const firstWordLength = words[0].length;
    const restOfWordsLength = longest(words.slice(1));

    return Math.max(firstWordLength, restOfWordsLength);
}

//3.
function everyOther(inputString, index = 0) {
    if (index >= inputString.length) {
        return '';
    }

    const currentCharacter = inputString[index];
    const nextCharacters = everyOther(inputString, index + 2);

    return currentCharacter + nextCharacters;
}

//4.
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    } else {
        return false;
    }
}

//5.
function findIndex(arr, target, index = 0) {
    if (index >= arr.length) {
        return -1;
    }

    if (arr[index] === target) {
        return index;
    } else {
        return findIndex(arr, target, index + 1);
    }
}

//6.
function revString(str) {
    if (str.length <= 1) {
        return str;
    }

    return str.slice(-1) + revString(str.slice(0, -1));
}

//7.
function gatherStrings(obj) {
    let stringValues = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'string') {
                stringValues.push(obj[key]);
            } else if (typeof obj[key] === 'object') {
                stringValues = stringValues.concat(gatherStrings(obj[key]));
            }
        }
    }

    return stringValues;
}
