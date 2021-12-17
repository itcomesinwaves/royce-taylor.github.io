/**
 * VARIABLES:
 * 
 * 0. Variables are named identifiers that are bound to a section of our code (called the scope). 
 * They are containers that can store data in your code. You can store values, 
 * like strings, numbers, or booleans (which are primitive data types) 
 * or you can use variables to point to a complex value type like objects, arrays, or functions. 
 *
 *  1. You can use the var, let, or const keywords to declare the variable and then follow it by 
 * the name you want to have (usually a name relevant to the data you are storing into it). 
 * 
 * 2. There are two phases with using variables: 
 *   ---The Declaration phase
 *       --this is where we declare are variable using let, var, or const and then name it after
 *         using the keyword
 *  --- The Assignment phase
 *       --This is where we assign the variables initial value by using the the assignment operator
 *         after the variable followed by the value (which can somtimes be reassigned later on)
 * 
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