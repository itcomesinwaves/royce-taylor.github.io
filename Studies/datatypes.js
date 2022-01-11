/**
 * DATA TYPES: 
 * 
 * 0: There are many different data types in javascript, and they help build and make up the information
 * of a program. Data types can vary from the type of data it is all the way to how data behaves as 
 * well as manipulated within a program. There are simple data types, and complex data types.
 * Simple data types are immutable which means that they hold, collect, or aggregate other values.
 * They copy by value so they are copied from one variable to the next whe4n assigning or passing them
 * /// simple data types include numbers, strings, booleans, NaN, undefined and null 
 * Complex data types are values that aggregate other values and are therefore indefinite in size as opposed
 * to simple data types. They are copied by reference instead of value when passing or assigning.
 * /// complex data types include objects, arrays, and functions  
 * 
 * 
 * 
 * 1: NUMBERS:
 *  -numbers in javascript basically the same as numbers in any other capacity of life. 
 *  -numbers can be used do perform arithmatic or be used as conditions to determine a boolean value
 *  -NaN is also a number that is usually returned when something resolves to something that javascript
 * doesn't recognize as a number 
 *  -numbers are simple data types
 * 
 * 2: STRINGS:
 *  -strings are a simple data type that is made up of a number of characters within quotations or 
 * template literals (which are initialized in javascript with backticks)
 *  -strings can be manipulated with different methods which are built into javascript
 *  -strings can also be a value within a complex data type like arrays 
 *  -stings are simple data types
 * 
 * 3: BOOLEANS:
 *  -booleans are values that are either true or false. They are sort of like on/off switches. 
 *  -booleans are often used to determine conditions as 'truthy' or 'falsey' 
 *  -to determine the boolean of a condition the values of that condition 
 * are usually assigned with logical operators that can then chain code blocks to determine which ones 
 * you need to run and which ones you don't want to run within javascript 
 *  -booleans are simple data types
 * 
 * 4: ARRAYS: 
 *  -arrays are indexed lists of values, that can be either numbers, booleans, strings, objects, functions,
 * or even other arrays(this would be known as nested array)
 * -arrays are initialized with the [] bracketed charaters and the values within them are serperated with a comma
 *  -arrays are 0 indexed which means that the first value in the array is going to be at the 0 index,
 * wich of course then counts up from 0 to the amount of values within the array
 *  -arrays are great and useful for when you need any sort of list within your code 
 *  -like strings, arrays can be manipulated (or destroyed) in a many number of ways to help the data contained 
 * within do whatever you need it to do 
 *  -arrays are complex data types 
 * 
 * 5: OBJECTS: 
 *  -objects are data types in javascript that contain a list of key/value pairs 
 *  -objects are intialized with {} curly brackets and within them the keys and values are seperated with 
 * a : colon, and then each of the key/value pairs are seperated with a comma 
 *  -objects key/value pairs are also know as properties and their values 
 *  -objects are very useful for storing large amounts of data which can then be accessed within your code
 * whenever you need it 
 *  -objects can be manipulated as well, in that you can iterate through, add, or delete properties or their values 
 * within the objects 
 *  -objects key/value pairs are viewed as strings in javascript, although the property of a value doesn't require quotes as the values do 
 *  -objects are a complex data type
 * 
 * 6: FUNCTIONS: 
 *  -functions are a data type in javascript that are used to execute or perform specific tasks within your program
 *  -functions can be stored in objects, arrays, and also passed into other functions
 *  -functions are initialized with their function name or as an anonymous funciton with the function keyword followed by their name and then,
 * a parenthesis () that usually take in parameters (but don't have to) and followed by curly brackets {} which contain the code block that will execute within the 
 * function body after the funciton is initialized later on in your code, this function body will also have a return statement which returns the value of whatever the function
 * resolves to based off the given parameters passed into it (although parameters are not required)
 *  -functions are initialized (or called) later on in your code using the functions name followed by parenthesis, within the parenthesis are going to be the arguments you pass in to the parameters
 *  -functions are complex data types 
 * 
 * 7: UNDEFINED: 
 *  -undefined is a data type in javascript that represents a primitive value that javascript has determined to not yet be defined
 *  -undefined is assigned to a variable or an object when there wasn't any previous assignment
 *  -undefined can be useful for debugging code, or for making certain parts of your code resolve to undefined
 * for a specific program
 *  -undefined is a simple(or primitive) data type
 * 
 * 8: NULL: 
 *  -null is used as an intentional absecence of value in javascript
 *  -null is seen as a 'falsy' value
 *  -null can be used for a specific code that you may want to resolve to a falsy condition or value
 *  -null is a simple data type 
 * 
 * 9: NaN: 
 *  -NaN stands for 'not a number' and is used in javascript it determines that a resolved value of 
 * code isn't a number
 *  -NaN can also be used to check if a value in your code is a number by utilizing the built in
 * isNaN() function
 *  -NaN is  a simple data type 
 *
 * 10: INFINITY and -INFINITY:
 *  -Infinity is a data type 
 *  -Infinity and beyond boiii
*/











// Examples of numbers: 
57; // numbers can be written as an expression on javascript // prints => 57
let num = 67; // numbers being stored in a variable 
console.log(num); // prints => 67 
            // numbers being used for basic (or complex) arithmatic 
const addition = function(x, y) { // creating a function with parameters of x and y that will then return the sum of the two parameters
    return x + y; // return statement that will add whatever number arguments that get passed in after the funciton is invoked
}
console.log(addition(50, 60)); // prints => 110


// Examples of strings
 var x = 'This is a string'; // normal string syntax
 var y = `${x} yet this is also a string!`; // template literal string syntax
 console.log(y); // prints => This is a string yet this is also a string!


// Examples of Booleans 
true; // like numbers, booleans values can be written as expressions in javascript
let result = false; // the boolean of false beings stored into the variabale 'result' 
console.log(!result); // using the bang operator to negate the outcome of result in the console (if result is true, it will be false)
                       // prints => true 
var bool = (1 === 1); // this expression uses logical operators to resolve to a boolean value
console.log(bool); // prints => true 

// Examples of Arraysr
let myArray = []; // arrays can be assigned with nothing in them 
let myArray = ['hey', 'this', 'is', 'totally', 'an', 'array']; // basic array
let newArray = ['hey', 'this', ['nested', 68, false], 'woah']; // this showcases a nested array within an array
let newerArray = ['one', function(){}, true, {name: 'Royce', existence: 'maybe'}]// this array shows how you can fit other complex data types within an array
                                                                                 // as well as simple data types 
let array = [1, 2, 3, 4, 5, 6, 7, 8];
//           0  1  2  3  4  5  6  7 => these are the indexes of an array 
console.log(array[0]) // you can access an arrays index through bracket notation // prints => 1
// --- accessing the elements of the array through a for loop 
for (let i = 0; i < array.length; i++) {
    console.log(array[i]); // prints => 1 2 3 4 5 6 7 8
}

// Examples of Objects
var myObject = {
    firstName: 'Royce',
    lastName: 'Taylor',

} 
console.log(myObject) // prints => {firstName: 'Royce', lastName: 'Taylor'}

//--- adding a key/value pair to the object with dot notation-- object.key = value;
myObject.middleName = 'Damon'; 
console.log(myObject); // prints => {firstName: 'Royce', lastName: 'Taylor', middleName: 'Damon'}

// --- accsessing every property in an object with for in loop
for (var key in myObject) {
 console.log(myObject[key]); // uses braket notation to access the values of each property and // prints => Royce Taylor Damon 
}
// --- accsessing a specific value in an object using bracket notation and assigning it to a variable of x 
var x = myObject['firstName']; 
console.log(x); // prints => Royce




// Examples of Functions

function littelAdd(num1, num2) { // typical function declaration with function keyword followed by function name and it's parameters 
    return num1 + num2; // function body that contains the actual process that the function will act onto the arguments when passed into the parameters
  }
  console.log(littelAdd(600, 1)); // prints => 601

  (function() {               // example of an anonymous function which usually gets passed into other functions (defined without a name) 
    console.log('Code runs!') // prints => Code runs!
});

const getRectArea = function(width, height) { // Function Expressions are formed when an annonymous function is assigned to a variable or a constant, 
                          //  when using the pattern of function expressions, you can only call the function after it's been assigned to a variable or constant
    return width * height;
  };
  
  console.log(getRectArea(3, 50));// To use a function we have to invoke or call it, which will run the code within the body or code block of the function
  // Arguments are the values that will be passed into a function when we execute the function
  // To call a function you must reference it's name to which it's assigned then pass any expected values into it 
  

// Examples of Undefined

var x; 
console.log(x); // prints => undefined 


function bones(x, y) {
    if (x === undefined) {
      return x; 
    } else {
      return y; 
        }
}
    console.log(bones(undefined,5)); // prints => undefined
    
    
// Examples of null
var what = null;
console.log(null) // prints => null 

const nully = function (c, t) {
    if (c === t) {
        return null;
    } else {
        return t; 
    }
}

console.log(nully(5, 5)); // prints => null 
    
// Examples of NaN

function addNums(x, y) {
    return x + y; 
}

console.log(addNums(5, undefined)); // prints => NaN 

var x = 200;
console.log(x + z); // prints => NaN

// Examples of Infinity 
