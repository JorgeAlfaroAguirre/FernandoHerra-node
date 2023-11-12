const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordsArray = content.split(' ');

// console.log(wordsArray);

//Filter

const WordCountReactWithFilter = wordsArray.filter(w => w === 'React').length + wordsArray.filter(w => w === 'react').length;
const WordCountReactWithFilterFix = wordsArray.filter(w => w.toLowerCase() === 'react').length;
const WordCountReactWithFilterFix2 = wordsArray.filter(w => w.toLowerCase().includes('react')).length;

console.log("Filter: " + WordCountReactWithFilter);
console.log("Filter Fixed: " + WordCountReactWithFilterFix);
console.log("Filter Fixed 2: " + WordCountReactWithFilterFix2);

//RegEx


const reactWordCount = content.match(/react/gi ?? []).length; //g && i Flags

console.log("With regular expresion (RegEx): "+ reactWordCount);

//g Flag:

//This flag is used to indicate that the regular expression should find all matches 
//within the input string, not just the first one. It ensures the search continues 
//after the first match.

const reactWordCountG = content.match(/react/g ?? []).length; //g Flag
const reactWordCountG2 = content.match(/react/g ?? []).length + content.match(/React/g ?? []).length; //g Flag

console.log("With regular expresion (RegEx) with only G Flag: "+ reactWordCountG);
console.log("With regular expresion (RegEx) with only G Flag, dirty solution: "+ reactWordCountG2);

//i Flag

//This flag tells the regex to perform a case-insensitive search, allowing matches 
//regardless of letter case.

const reactWordCountI = content.match(/react/i ?? []).length; //i Flag

console.log("With regular expresion (RegEx) with only I Flag: "+ reactWordCountI);