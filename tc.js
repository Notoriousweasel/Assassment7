// 1.
const addToZero = (numbers) => {
    const numbPresent = new Set();

    for (const num of numbers) {
        if (numbPresent.has(-num)){
            return true;
        }
        numbPresent.add(num);
    }
    return false;
}
// Example:
const array1 = [2, -3, 1, 5, -2];
const array2 = [1, 2, 3, 4, 5];

console.log(addToZero(array1));
console.log(addToZero(array2));

// Runtime time complexity is O(n) and Space is O(n)

// 2.
const hasUniqueChars = (word) => {

    let stringSet = new Set(word);
    if (stringSet.size===word.length)
        return true;
    else return false;
}
console.log(hasUniqueChars('Monday'));
console.log(hasUniqueChars('Moonday'));

// Runtime time complexity is O(n) and Space is O(n)

// 3.
const isPangram = (str) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    str = str.toLowerCase();
    let strSet = new Set()
    for (const char of str) {
        if (alphabet.includes(char)) {
            strSet.add(char);
            if (strSet.size === 26)
            return true;
        }
    }
    console.log(strSet.size);
    return false;
}
console.log(isPangram('The quick brown fox jumps over the lazy dog!'));
console.log(isPangram('I like cats, but not mice'));

// Runtime time complexity is O(n) and Space is O(n)

// 4.
const findLongestWord = (arr) => {
    let max = 0;
    for (const ele of arr) {
        if (ele.length > max) max = ele.length;
    }
    return max;
}
console.log(findLongestWord(['hi', 'hello']));

// Runtime time complexity is O(n) and Space is O(1)
