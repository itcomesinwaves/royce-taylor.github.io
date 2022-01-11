/**
 *  STRING MANIPULATION: 
 * 0: String manipulation is a way that we can alter strings in javascript with different techniques or built in methods when building your 
 * program. They can be very useful when you need to access certain characters within a string. The javascript interpreter view strings as objects because they
 * are stored as character arrays, which is why string manipulation is as common as it is essential when programming. String manipulations exist within a very wide
 * range of manipulaitons like extracting portions of the string or determining if a string contains a specific character. These actions of manipulation are known as 
 * methods.  
 * 
 * 1: String Manipulation can be achieved with operators as well. One common way is  through a process known as concatonation, which will essentially take multiple 
 * strings together into one string. This same sort of concatenation can also be achieved through string interpolation which is initiated through the use of backtics
 * and any variable needs to be wrapped in curly brackets ${} behind a dollar symbol. This technique makes certain instances of concatonation more cohesive, and easier
 * to read. 
 * 
 * 
 * 2: There are many methods of string manipulation, some of the most commmon ones include: 
 * -concat() which will combine the text of two or more strings and returns a  new string
 * -indexOf() which returns a character at specified location
 * -lastIndexOf() which returns the index of (within the string) of the last occurance of a specified value, or -1 if not found
 * -match() which is used to a regular expression against a string 
 * -substring() which returns a portion, and a starting location and ending location are passed into this function
 * -replace() this is used to find a match between a regular expression and a string, and then replaces the method substring with a new substring
 * -slice() which extracts a section of a string and returns a new string 
 * -split() which splits the string into an array of strings by seperating the string into substrings (as each element in the array) 
 * -length() this will return the length of a string as the count of the number of characters thath it contains 
 * -toLowerCase() which converts the entire string to lower case
 * -toUpperCase() which converts the entire string to upper case
 *  
 */

const { indexOf } = require("../projects/underpants/underpants");

/// Examples of String Manipulation /// 

// example of concat()
let string = 'I\'m a string'
let otherString = ', I\'m just gonna scoot in right next to you' 
console.log(string.concat(otherString)); // prints => I'm a string, I'm just gonna scoot in right next to you

// example to indexOf()
let str = 'Where is the s?';
console.log(str.indexOf('s')); // prints => 7

// example of lastIndexOf()
let str = 'what value is the last char?';
console.log(str.lastIndexOf('?')); // prints => 27

// example match()
var regex = /[A-Z]/g; 
let str = 'Whoa There!'
console.log(str.match(regex)); // prints => ['W', 'T']

// example of substring()
let string = 'This is about to get wild!';
console.log(string.substring(2, 4)); // prints => is 
console.log(string.substring(2)); // prints => is is about to get wild!

// example of split()
let str = 'This';
console.log(str.split('')); // prints => ['T','h','i','s']

// example of length()
let string = 'How long am I really?';
console.log(string.length); // prints => 21

// example of toLowerCase()
let string = 'WE NEED TO CALM DOWN';
console.log(string.toLowerCase()); // prints => we need to calm down

// example of toUpperCase()
let str = 'we need to get pumped';
console.log(str.toUpperCase()) // prints => WE NEED TO GET PUMPED
//