/**
 * VARIABLES:
 * 
 * 0. Variables are named identifiers that are bound to a section of our code (called the scope). 
 * They are containers that can store data in your code. You can store values, 
 * like strings, numbers, or booleans (which are primitive data types) 
 * or you can use variables to point to a complex value type like objects, arrays, or functions. 
 *
 * 1. You can use the var, let, or const keywords to declare the variable and then follow it by 
 * the name you want to have (usually a name relevant to the data you are storing into it). 
 * 
 * 2. There are two phases with using variables: 
 *   ---The Declaration phase
 *       --this is where we declare are variable using let, var, or const and then name it after
 *         using the keyword
 *  --- The Assignment phase
 *       --This is where we assign the variables initial value by using the the assignment operator
 *         after the variable followed by the value (which can somtimes be reassigned later on)
 * 3. There are three varibale keywords, two of which were introduced in the ES6 version of javascript
 * the old school one is var, but the newer ones are let and const. These new variabel keywords open up more possibilities
 * within javascript where it used to be otherwise limited. 
 *  
 */

// 1. Example of declaration //
// At this declaration phase the variable 'x' is simply just stated and would be considered undefined
var x; 
console.log(x); // prints => undefined

// 2. Example of initialization or assignment //
// At this phase we are assigning the value of x to the boolean of 'true' so that it is an officially declared variable
// Now when x is logged to the console it will have a value instead of undefined 
x = true; 
console.log(x); // prints => true

// 3. Example of reassinment //
// Here we can change/update/reassign our variable 
// note*** that you can not reassign a varible declared with the 'const' keyword 
x = false; 
console.log(x); // prints => false

/// Examples of var , let , and const ///

// var //

// var is the orginal variable declaration keyword and has it's use as seen in the examples above
// As we displayed earlier it is reassignable, but it is also hoisted and (when declared within a function block) 
// it is also scoped to that function 
// is is not scoped to if statements or loop blocks 

var x = true; 
function doSomething() {
    x = false;
    console.log(x);
}
doSomething(); // prints => false
console.log(x); // prints => true

// let //

// let is similar to var in that it is reassignable in the same capacity dnd that it is scoped to functions
// where it's differnt though is that it isn't hoisted like var, and unlike var let is going to be scoped 
// to if blocks as well as loop blocks 
let j = 'woah'; 
let y = 'hello';
function doSomethingAgain() {
    y = 'woah'; 
    if (j !== y) {
        console.log('What are you thinking about?'); // this condition is skipped because condition resolves to false
    } else {
        y = ('Alright then keep your secrets...'); // this block of code is then executed after the function is called 
    }
}
console.log(doSomethingAgain()); // prints => 'Alright then keep your secrets...'
console.log(j); // prints => 'woah'
console.log(y); // prints => 'hello'


// const //

// const or 'constant' is probably the most unique variable declaration. 
// The biggest difference that seperates const from the var or let, is that it's NOT reassignable 
// const is not hoisted either 
// const is scoped to function blocks, if blocks, and loop blocks 
const p = true; 
p = false; // this reassignement isn't allowed 
console.log(p); // prints => throws a type error since constants cannot be reassigned 

