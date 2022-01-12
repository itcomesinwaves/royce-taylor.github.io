/**
 * LOOPS: 
 * 
 * 0: Loops are a way that we can iterate throught collections of data within Javascript. Sometimes it's hard to know where a specific value or element is within a collection, which makes it difficult to 
 * access it throught the regular bracket or dot syntax. Loops can be used to achieve this, by iterating through an array or object, we gain access to each of it's elements or key/value pairs, which can then be
 * manipulated or stored in some way that your program needs for it to do so. Loops can also be used to execute specific code blocks for as many times as we need them to do so. Loops are built in constructs that 
 * have a dedicated structure and are initiated with the the for, for in, or while keywords.  
 * 
 * 1: WHILE LOOPS: These are iterations that are great for when one doesn't know how many times they need to iterate through something, typically used as a counter of sorts, but has other implementations as well. 
 * While loops are initiated with the while keyword after a certain starting point has been declared on the line above it. The while keyword is followed by a stopping condition in parenthesis that will continue firing as 
 * long as the condition remains true. This is then followed by the code block one wants to execute within your program usually some sort of action or manipulation to the expression declared at the top of the loop. The last part
 * is the incrementer or decrementer which is what keeps the loop driving and helps it reach the stopping point mentioned earlier, for if this part is never written, there will be an endless loop which will inexplicably crash your workspace. This is 
 * because the the invcrement/decrement assures that you will eventually hit the stopping condition. 
 * 
 * 2: FOR LOOPS: These are structured iterations that are meant for iterating through arrays, and strings. It will access each index of the array or string so that you can access each element or character for further mainpulation or other form of 
 * processing. Unlike while loops, for loops are stated on one line and are followed by whatever action or code block that you want to execute. There are three main parts of declaring a for loop, the starting condition, the ending condition, followed by
 * the amount of steps one wants to take for each iteration. The for loop is initiated with the for keyword followed by the rest of the conditions in parenthesis. The starting condition is usually setting the index to zero, followed by the next condition, 
 * which will depend and vary based on what you want to your stopping point to be, but it's usually the length of the list that you're iterating through. Then it will be followed by an increment or decrement by any amount of numbers so the code knows how to 
 * step throught the iteration. There is also, of course, the code that you want to execute for each iteration declared after the loop wrapped in curly brackets. 
 * 
 * 3: FOR IN LOOPS: These are iterations that are built in as well, and are meant for exclusivley iterating over objects. They will give you access to each key/value pair of the object that you're iterating through. These are structured very similarily to 
 * for loops, in that they have a starting condition a stopping condition. They are initiated with the for keyword followed by the in keyword (set to a variable) in parenthesis, then the stopping condition is the key (every key) in the object, then directly 
 * after the object keyword is the stopping point, for you want to iterate through the entire distance of the object. There is also a code block under in curly brackets that will be executed for each iteration.  
 */

// Examples of While Loops //
var count = 0; // this is the starting point 
while(count <= 20) { // this is the stopping condition which will break out of the loop as soon as it resolves to false
    console.log(count); // prints => 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
        count++; // this is the amount we will count for each iteration 
}

var count = 20; // the starting point is now 20 and we want to loop descending
while(count > 0) { // so we will set the breaking condition to when count reaches zero 
    console.log(count); // prints => 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
        count--; // this will ensure that we are counting down instead this time 
}

// Examples of for loops // 
////// looping forwards and backwards through a string 
let string = 'Mr. Owl ate my metal worm'; 

for (var i = 0; i < string.length; i++) {
//   start       ending             incrementation
    console.log(string[i]); // prints => M r .  O w l  a t e  m y  m e t a l  w o r m
}

for (var i = string.length-1; i >= 0; i--) {
//   starting at last index    stopping at first index    then incrementing down
    console.log(string[i]); // prints => m r o w  l a t e m  y m  e t a  l w O  . r M
}
////// looping forwards and backwards through an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array.length; i++) {
//    start     end at the length of the array   increment by one each time    
    console.log(array[i] + 1); // prints => 2 3 4 5 6 7 8 9 10 11
}                  /// adds one to each element of the array

for (var i = array.length-1; i >= 0; i--) {]
//   start at the end of array  stop at the 0 index   increment down by one each iteration
    console.log(array[i] - 1) // prints => 9 8 7 6 5 4 3 2 1 0
}

// Examples of for in loops // 
////// looping forwards and backwards through an object
let object = {
    movie: "Star Wars",
    director: "George Lucas",
    year: '1977'
};

for (var key in object) {
//   iterates throught for every key withing the object     
    console.log(object[key]); // prints => Star Wars  George Lucas  1977
}

//