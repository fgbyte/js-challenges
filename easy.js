"use strict";
// 1. Write a JavaScript function to reverse a given string. This should include punctuation and spacing. Return the reversed string.
Object.defineProperty(exports, "__esModule", { value: true });
// Examples
// 'Hello, World!'	'!dlroW ,olleH'
// 'FAANG Interview'	'weivretnI GNAAF'
// 'JavaScript is fun'	'nuf si tpircSavaJ'
function reverseStringChallenge(str) {
    return str.split('').reverse().join('');
}
// console.log(reverseStringChallenge('Hola'))//aloH
//tuve que usar 3 methods because reverse() no es un method de string, sino de arrays
//por lo que usamos antes split('') -> separa los charts en elementos de un array
// => [ 'H', 'o', 'l', 'a' ]
//* then es que puedo usar reverse() => [ 'a', 'l', 'o', 'H' ]
//then join('') -> une los elementos del array en una string separados por '' (la nada misma) => aloH
// 2. Write a JavaScript function to count occurrences of a specific character in a given string. Return the count of the character.
//Examples
// ('Hello, World!', 'l')	3
// ('FAANG Interview', 'a')	2
// ('JavaScript is fun', 's')	2
function countChar(srt, char) {
    var preparedString = srt.split('');
    var count = 0;
    preparedString.forEach(function (item) {
        item === char && count++;
    });
    return count > 0
        ? count
        : "the char don't exist";
}
// console.log(countChar('Hola mundo', '3'))
//3. Write a JavaScript function to count occurrences of a specific word in a given string. The word match should be case-insensitive. Return the count of the word.
// Examples
// ('Hello, world! Hello, everyone!', 'hello')	2
// ('FAANG Interview, faang is great', 'faang')	2
// ('JavaScript is fun, I love JavaScript', 'javascript')	2
function countWords(str, word) {
    var preparedString = str.replace(/[^\w\s]/g, '').toLowerCase().split(' ');
    var count = 0;
    preparedString.forEach(function (item) {
        item === word && count++;
    });
    return count;
}
// console.log(countWords('Hello, world! Hello, everyone!', 'hello'))
//4. Write a JavaScript function named 'countVowels' that takes a string as an argument and returns the number of vowels in that string. The function should be case insensitive. For example, 'Hello World' contains 3 vowels. 
//vowels == vocales
// Examples
// countVowels('Hello World')	3
// countVowels('Why so serious?')	4
// countVowels('I am Groot')	4
// Difficulty level
function countVowels(str) {
    var _a;
    //need a regex with .match() method to extract vowels
    //a .length method for the string
    var preparedString = (_a = str.match(/[aeiou]/gi)) === null || _a === void 0 ? void 0 : _a.join('');
    return (preparedString === null || preparedString === void 0 ? void 0 : preparedString.length) || 0;
}
// console.log(countVowels('I am Groot!'))
//5. Write a JavaScript function named 'replaceVowels' that takes a string and a character as arguments, replaces all the vowels in that string with the provided character. The function should be case insensitive. For example, 'Hello World' and 'x' as character would give 'Hxllx Wxrld'.
// Examples
// replaceVowels('Hello World', 'x')	Hxllx Wxrld
// replaceVowels('Why so serious?', 'a')	Wha sa saraias?
// replaceVowels('I am Groot', 'o')	o om Grooot
function replaceVowels(str, char) {
    var replaced = str.replace((/[aeiou]/gi), char);
    return replaced;
}
// console.log(replaceVowels('I am Groot', 'o'));
