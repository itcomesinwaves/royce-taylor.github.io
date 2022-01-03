/**
 * OPERATORS:
 * 
 * 0. Operators in javascript are used to act on data, they can be used to perform mathematical operations, compare data, or even assign data to a variable. 
 *   Operators are capable of manipulating a certain value or operand. They essentially operate the operands. The different operators are essentia to making your program
 *   work properly, otherwise you would just have the weird shell of named variables and data that has no behaviour or direction to act on. 
 * 
 * 1.Assignment operators: assignment operators are used to assign direct values of the left operand to the right operand (the one on the other side of the said assignment operator). 
 *  These are important because they tell javascript which variables, or functions need to point to specific values as well as when to stop doing so. 
 *  These are also impotant to know so you don't mistake some of them for logical or comparison operators since they may seem to have a similar function when they don't. These operators include the 
 *  assignment = operator, the += which assigns the value of the left to the value of the right value to the left value, the -= which assigns the value of the left to the value of the right subtracted
 *  from the right value, the *= which assigns the value of the left to the value of the right multiplied by the left, and the /= which assigns the value of the left to the value of the left value
 *  divided by the right value 
 *  
 * 2. Arithmatic operators: These are operators in javascript that are used for mathematical equations and operate as one would assume for most of the syntax, 
 *  this includes addition with the + operator and subtraction as the - operator, along with multiplication * operator and the division / operators. 
 *  There is also the remainder % operator which is used to calculate the remainder of an operand after it is divided by another operand. 
 * 
 * 3. Comparison Operators: These are operators that are used to compare data within your program. They either resolve to true or false (or a boolean value). 
 *  These operators include the less than <, greater than >, less than or equal to <=, greater than or equal to >=, strictly equal (or deeply equal) ===, or (loosely) equal ==,
 *  or not equal to !==. These are often used for conditional statements when you want to check if one variable against another one to decide if the program within that code block
 *  should run or not. 
 * 
 * 4.  Logical operators: These are operators that are used (usually in conjunction with comparison operators) to chain or continue a condition to determine a boolean value within a 
 *  program. They sort of take comparison operators and add an extra layer of complexity to the program which can open up more possibilities of direction within a code block. These include 
 *  the ! bang operator, which is used to negate a comparison, resolutions of expressions, or values. It essentially is putting a 'not' 'does not' in front of the data type. There is also the 
 *  the && or the AND operator which is used to basically say one statement is true or false AND the other is true or false (true or false depending on what you want the code to evaluate to) then 
 *  continue with the following code execution. Thers is also the || or the OR operator which behaves similarily to the AND operator but it's says if one statemnt is true or false OR the 
 *  other is true or false then continue with the following code execution 
 * 
 * 5. Unary Operators: These are operators that are used to compare one type of operand to itself (single value). These type of operators include, unary plus +, unary minus -, increment ++, decrement --, 
 *  logical  NOT !, Bitwise NOT ~, typeof, delete, and void 
 *  These are often used when you need to increase, decrease or resolve a single value in any way.
 * 
 * 6. Ternary Operators: These are operators that operate on three operands in javascript. The first part is a condition followed by a question mark ? and then is followed by a code that runs if the condition resolves to truthey,
 *  and is then followed by a colon : ,and then there's the code to execute if the condition resolves to falsey. This is used as an alternative to if..else statements because they are shorter and take up less lines which looks a little 
 *  cleaner. 
 */



// Examples of Assignment operators //
var x = 7; // here we can observe the assignment operator in action as it grabs the value of 7 and points it to the variable x
console.log(x); // prints => 7

x += 1; // this is taking the value of x and adding x to 1 or //x = x + 1//
console.log(x); // prints => 8

x -= 2; // this is taking the value of x and subtracting 2 from the value of x  or //x = x -2//
console.log(x); // prints => 6

x *= 3; // this is taking the current value of x and assigning it to the value of x multiplied by 3 or //x = x * 3//
console.log(x); // prints => 18

x /= 2; // this is taking the current value of x and assingning it to the value of x divided by 2 or //x = x / 2//
console.log(x); // prints => 9

// Examples of Arithmatic operators //
let xxxx = 5; 
function add(x, y) {
    return x + y; // takes the value of x parameter and ADDs it to the value of the y parameter 

}
console.log(add(xxxx, 7)); // prints => 12

function subtract(x, y) {
    return x - y;// takes the value of x parameter and subtracts the value of the y parameter from it 
}
console.log(subtract(xxxx, 3)); // prints => 2

function multiply(x, y) {
    return x * y; // takes the value of x parameter and multiplies the value of the y parameter to it 
}
console.log(subtract(xxxx, 2));// prints => 10

function divide(x, y) {
    return x / y; 
}
console.log(divide(xxxx, 10)); // prints => 2 

function percentile(x, y) {
    return x % y; 
}
console.log(xxxx, 25); 