const name = "ayan"
const repoCount = 50

// console.log(name + repoCount + " Value");


// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ayan-mukh')
// console.log(typeof gameName); //output - object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,2) // if negative values are used in substring it doesnt obey it and starts from 0 only.
// console.log(newString);

const anotherString = gameName.slice(-9,6) // when neg value is given it starts from the opposite side of the string
// console.log(anotherString);

const newStringOne = "     ayan   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = 'https://ayan.com/ayan%20mukh'
// console.log(url.replace('%20','-'));

// console.log(url.includes('ayan'));

// console.log(gameName.split('-'));

