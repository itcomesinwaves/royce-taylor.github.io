/**
 * CONTROL FLOW: 
 * 
 * 0: Control flow is the way we structure conditional statements in javascript. Conditional statments are a way that we can make decisions 
 * by writing code in the a sort of question that will resolve to true or false. Based on the boolean condition diferent blocks of code will 
 * then execute. The most utitlized control flow conditional statement is the 'if' 'else-if' 'else' chain, and within each if statement is a 
 * condition that will resolve to either truthy or falsey therefore they are evaluated in a boolean context. If statements will always return true, if their condition is true
 * so if you have an if statement after the initial one in it's code block, then they will both return true, therefore making a series of if statments NOT a conditional chain, since they all will return true. 
 * There are also switch break statemnets as well. Switch break statements are useful for larger sets of conditions that one may have to write but are evaluated to a boolean context in the same
 * way if else chains are. 
 * 
 * 1: if: The 'if' keyword is how we initialize the conditional chain and will have the first condition directly after it wrapped in parenthesis. If this condition
 * is true, then it's following code block that is wrapped in curly brackets will be executed. This condition can also simply be viewed as truthy or falsey. 
 * 
 * 2: else-if: The 'else-if' keywords will link the chain of your initial 'if' statement. If the the first if condition resolves to a falsey value the code will then 
 * check this next condition contaied within the else if statement, and if that condition resolves to a truthey value then the code block within the following curly brackets
 * will execute instead of the last if conditional. These else if statements can go on and on and chain together checking multiple different conditions based off of multiple
 * different types of situations and comparisons. If none of them resolve to truthey, then all of these code blocks will be skipped and will then proceed to the default condition.
 * 
 * 3: else: The 'else' keyword is the default condition, that will automatically run if all the other conditions resolve to false. There isn't an actual condition written out, for 
 * it is implied with the context of the if, else-if, else chain. The else isn't always required, but it's usually part of a cohesive and operations if conditional chain within 
 * your program. 
 * 
 * 4: Switch/Break: Switch/Break statements are conditional statements that behave in the same manner of if, else-if, else chains, but are structured a bit differently. There main use
 * is for when you need many different conditions to check, since it requires less text/characters to type out for each condition, which can also make it easier to read. These are initiated 
 * with an expression, followed by the switch keyword. Then there is the case keyword followed by an expressin that you want to check in parenthesis. Then contained within curly brackets, 
 * you will have the case keyworkd followed by the first condition on parenthesis, which either resolve to true or false, if true the code one line under will execute, and it will break out 
 * of the chain with the break keyword on the next line down. If the condition is false however, the rest of the conditions within the chain will be checked, and will either be executed or skipped. 
 * If all the conditions are false then the deafault code block will execute (initiated by the default keyword) and it will then break out of the chain at that point.   
 * 
 */


//// Examples of Control Flow ////

// if else-if if //
var randomVar = 'Totally!';

if (randomVar === 'Na') { // randomVar does not strictly equal the string "Na" so the check gets skipped
    console.log('No way')  // this execution is ignored
} else if (typeof randomVar === 'number') { // randomVar is not a number so this code block will not execute as well
    console.log('Why though?'); 
} else {           // since neither of the first two conditions are true the default code block will be executed 
    console.log('Totally this is a thing'); // prints => Totally this is a thing 
}
//// differnt example of the same concept 
var randomVar = 6; // randomVar is the number 6 this time
    if (randomVar === 'Na') { // this condition  is skipped just like last time 
    console.log('No way') 
} else if (typeof randomVar === 'number') { // this condition resolves to true this time though so the following code block is executed since randomVar is a number datatype
    console.log('Why though?');  // prints => Why though?
} else {
  console.log("Totally, yes this is."); 
}

// Switch Break // 
let x = "Han Solo"; // variable x is assigned to the string Han Solo
switch (x) { // switch/break control flow is initiated 
  case 'Chewie': // checks if x is strictly equal to the string Chewie
    console.log("RRWWWGG"); // this wonderful notorious sound is skipped 
    break; 
  case 'R2-D2': // checks if x is strictly equal to the string "R2-D2"
    console.log("BeepbeepbOOP"); // this awesome noise is also skipped 
    break;
  default:   // since neither cases were true the default is initiated 
    console.log("Who the heck is Adam Driver??"); // prints => Who the heck is Adam Driver?? 
}