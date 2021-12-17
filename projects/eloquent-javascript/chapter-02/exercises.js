
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(triangleszzzz) {
  for (let pp = '#'; pp.length <= triangleszzzz; pp += '#') {
  console.log(pp); 
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
  // print start to end
  // anything that's a multiple of 3 'fizz'
  // if anythign that's a multiple of 5 'buzz'
  // if both 'fizzbuzz'
  for (var i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');

    } else if (i % 3 === 0)  {
      console.log('fizz');
    } else if(i % 5 === 0) {
      console.log('buzz'); 
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
 // create an empty string result 
let result = '';
 // loop to create the rows
 let row = 1; 
 while (row <= size){
   let column = 1; 
  // loop to create columns 
   while (column <= size){ 
     if ((column + row) % 2 === 0){
       result += ' '; 
     } else {
       result += '#'; 
     }
     column += 1; 
   }
   // add a new line symbol to end current row
   result += '\n';
   row += 1; 
 }


console.log(result); 


  // log result to the console 



  // let newBoard = '';

  // for (let y = 0; y < num.length; y++) {
  //   for (let x = 0; x < num.length; x++) {
  //     if (x + y % 2 === 0) {
  //       x += ' ';
  //       newBoard += x;
  //     } else { 
  //       newBoard += '#'; 
  //     }
  //   }
  //   newBoard += '\n';  
  
  // } 
  // console.log(newBoard);
  // return newBoard;  

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
