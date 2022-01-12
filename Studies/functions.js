/**
 * FUNCTIONS:
 * 
 * 0: Functions are complex data types that resolve to some sort of action taking place within your program. They are either saved into a varibel via an expression or they are passed or they are declared. They take in parameters 
 * Functions are declared with the function keyword, followed by it's the function name (usually some relevence to it's operation) and then the function body in curly brackets, which contains the action that the function performs,
 and then returns the result of that action. A function is invoked or called (before or after) the function declaration, by typing it's name directly followed by parenthesis containing any arguments that you may need to pass into the
 the functions parameters. These blocks of code can be executed whenever and however many times we want. 

 1: PHASES: There are two phases to a function declaration, The first of which we must write the function keyword (if you were saving the function to a variable this would be following the variable declaration), and then writing the parameters in 
 parenthesis, followed by the functions body in curly brackets. The second phase of using a function is actually invoking the function (or calling) it so that it can actually perform any action that it is programmed to perform. This is achieved 
 by stating the functions name followed by it's arguments that you want to pass into it's parameters, in parenthesis. 

 2: THE DIFFERENCE: There is a differecne between the functions parameters and the arguments placed into them. The parameters are named placeholders that are named  relevantly to the style of arguments being passed into them. They are more of a reference
 to the data that you want to perform an action with. The arguments are the actual data that you want to pass into the function during it's invocation. 
 
 3: THE SYNTAX: The syntax for a named function is the the function keyword followed by the functions name and then directly after the name will be the functions parameters in parenthesis. Following all of that will be the function body, which is the code
 block that will be executed when the function is invoked, wrapped in curly brackets. 

 4: ASSIGNMENT: Functions can be assigned to a variable by writing the function anonymously, meaning it doesn't have a name, and will be invoked by calling the name of the variable to which it is assigned instead. The syntax would be the variable declaration,
 either var, let, or const, followed by the name of the variable and an the assignment operator. Then you would have merely the function keyword followed by it's parameters in parenthesis, which is then followed by the function body wrapped in curly brackets. 

 5: OPTIONS: Functions paramerters and values which are returned are optional. There doesn't always need to be parameters passed into a function, and can therfore just have an empty set of parenthesis. The same is true when being invoked, and the function can 
 be called by just just it's name with an empty set of parenthesis, without any arguments being passed into them. Functions also don't always need a return statement, sometimes you just want to perform an action on certain elements or properties without returning, 
 any sort of value. This can be demonstrated in Javascripts built higher order function forEach. 
 
 6: SCOPE: Scope is an area within your code  that determines where certain areas have access to certain variables within your program. Scope is important because it ensures that the specific variables within your functions are bound to those code block areas, or that
 certain functions can access varible in a different scope. There are two main types of scope, the global scope, and the local scope. The global scope refers to variable declarations made on the outer most areas(outside of function bodies loop code blocks, and conditional code blocks) 
 of your code. The local scope refers to the variables declared within the function body, and these variables are exclusive to the function itself or any proceedeing functions nested within it, meaning that's where they are exclusively available. Variables declared in a local scope have access
 to variables declared in the global scope, but varaibles in the global scope do not have access to variables in the local scope of a function.


 7: CLOSURE: Closure is a function having access to the parent (or lexical) scope, even after the parent function has already closed. A closure is created when the function is declared, and not when the function is executed. Similar to a baseball field, or a 
 basketball court, the closure (or field/court) is created before any actions (or games) take place on them. If a variable is declared in the global scope then a function with closure won't have access to that variable. Closures are useful because they let you relate data with a function that 
 uses that same data. 
 
 * 
 */


 /////////////////// Examples of Functions ///////////////////////////////////

 // Examples of Funtions Phases //
         // First phase: function declaration
 function thisIsTheFunctionName(a, b) { // function declaration
// function keyword // followed by it's name // followed by it's parameters     
    return a + b; // return keyword followed by the action that this function executes
 }

          // Second phase: function invocation
console.log(thisIsTheFunctionName(5,1)); // prints => 6
//        function name followed by arguments wrapped in parenthesis that you want to pass into the parameters of the function


// Examples of Parameters and Arguments //

function doSomething(l, j) {// l and j are both parameters, which are almost like variables being created to hold values later on after invocation

    return l * j; // here in the return statement you can see what those parameters will and how they will function
}          

console.log(doSomething(2, 2)); // here are the arguments that will be passed into the function since it's now being invoked, these values are being passed in and stored in ther parameters l and j above
                // prints => 4

// Examples of Named and Declared Functions //
   // function declaration 
function someRandomFunction(x, y) { // simple function declaration, function keyword, followed by name, then parameters in parenthesis, and then the code block that contains the action
    return x / y; 
}
console.log(someRandomFunction(10, 2)); // prints => 5

   // function expression
const add = function(b, c) { // an anonymous function that adds two values is being saved to the variable add
    return b + c; 
}
console.log(add(3, 5)); // prints => 8
   /// the function expression can be invoked by calling the name of the variable that it's stored in


// Example of Function without parameters //
function max() { // The function max doesn't have any parameters to take in but can still have implied arguments to be passed into later during the functions invocation
    var maxValue = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (maxValue < arguments[i]) {
            maxValue = arguments[i];
        }
    }
    return maxValue;
}

alert(max(1, 5, 7, 2, 88, 32, 44)); // prints => 88

// Example of Scope // 

var age = 29; // This variable is being declared in the global scope so the functions scope below does have access to it 

function doSomething() {
  var name = 'Royce';
  console.log(`I'm ${name} and I am ${age} years old`); // this 
}
console.log(doSomething()); // this function call will print the string since it is within the functions local scope and has access to variables contained in the local scope and the global scope 
            //   prints => I'm Royce and I am 29 years old 
console.log(name); // This will throw an error since name is bound the the functions scope and isn't available outside of it. 
            // prints => Reference Error: name is Not defined........


// Example of Closure // 

function outerFunction() { // main function is declared therefore creating the functions scope
    var name = 'Royce'; // variable declared within the local scope 
    function innerFunction() { // function declared within the outerfunctions scope 
        console.log(name); // prints => Royce    since the function has access to the variables in it's parent scope even after the parent scope has been resolved, this is an example of closure
    }
    return innerFunction; // resolution fo the innerscope is retured as the result of the parent scope 
}
var theFunc = outerFunction(); // this will save the result of calling the outerfunction the the variable theFunc
theFunc(); // invocation of the entire function 