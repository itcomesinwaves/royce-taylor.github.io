////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  // create output array
  var rangy = [];
  // edge case
  if (start === end) {
    return []; 
  }
  // if step in not passed in 
if (step === undefined) {
  for (let i = start; i <= end; i++) {
    rangy.push(i);
  }
} else {
  if (step < 0) {
    return []; 
  } else {
    for (let i = start; i <= end; i+= step) {
      rangy.push(i); 
    }
  }
}
return rangy; 
  // else step is passed
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
 let summy = 0;
  // iterate through array and find the sum
  for (var i = 0; i < array.length; i++) {
    summy += array[i]
  }
return summy;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) { // [1, 2, 3] => [3, 2, 1]]
  var reversed = [];
  for (var i = array.length -1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) { // =>[1, 2, 3, 4] => flipped 
  // [1, 2, 3, 4] // even number of values 
  // [1, 2, 3, 4, 5] // odd number of values

  // [1, 2, 3, 4] =>
    // [4, 2, 3, 1]
      //[4, 3, 2, 1]
  if (array.length % 2 ===0) {
    for (let i = 0; i < array.length/2; i++) { // iterate as long as i<2
    let temp = array[i]; // temp = 1
    array[i] = array[array.length- 1 - i] // array[0] = 4 // [4, 3, 2, 4]
    array[array.length - 1 - i] = temp; // [4, 2, 3, 1]
  }

} else {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i]; 
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}
return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// var arr = [10, 20,30];
/*
{
  value: 10
  rest: {
    value: 20,
    rest: {
      value: 30, 
      rest: null
    }
  }
}


*/
function arrayToList(array) {
  // start at the innermost key/values and iterate through array in reverse
  var rest = null
  
  for (var i = array.length -1; i >= 0; i--) {
    rest = { value: array[i], rest}
}
 return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
 let newArr = [];
 for (let node = list; node; node = node.rest) {
     newArr.push(node.value);
 }
return newArr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(list, element) {
  let newList =  {
    value: list,
     rest: element
  };
  return newList;
};


////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  if (n < 0) {
    return undefined;
  }
  if (n === 0) {
    return list.value; 
  }
    // recursion
    return nth(list.rest, n - 1);
  
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {

    if (typeof x !== 'object' && typeof y !== 'object') {
      return x === y;
    }
    if (typeof x !== 'object' || typeof y !== 'object') {
      return false;
    }
    let xKeys = Object.keys(x);
    let yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) {
      return false;
    }
    for (let i = 0; i < xKeys.length; i++) {
      if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])) {
        return false;
      }
    }
    return true;
  }




  // // if both x and y are not 'objects'
//   // compare them directly 
//   if (typeof x !== 'object' && typeof y !== 'object') {
//     // compare them directly 
//     return x === y;
//   }
//   // determine if either x or y is not an object 
// if (typeof x !== 'object' || typeof y !== 'object') {

// }
// // now we're only dealing with complex pieces of data 
 
//  // create array of the x values keys 
//  let xKeys = Object.keys(x); // ['a']
//  // create array of the y values keys
//  let yKeys = Object.keys(y);  // ['a']

// // if the length of xkeys in NOT equal to the lenght of ykeys
// if (xKeys.length !== yKeys.length) {
//   return false; 
// }


// // the keys arrays are EQUAL
// // ['a', 'b'] // ['c', 'd']
// for (let i = 0; i < xKeys.length; i++) {
//   // determine if the current key in xKeys is NOT included in the yKeys array OR the result of calling deepequal on the values as these keys returns false 
//   if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]]))  {

//     return false; 
//   }
// }


// // otherwise if we iterated through every aspect of the iteration

// return true; 


// }


  // if (x === y) {
  //   return true;
  //  }
  //   if (x == null || typeof x !== 'object' 
  //   || y == null  || typeof y !== 'object' ) {
  //     return false; 
  //   } 
  //    let thingsInX = 0;
  //    let thingsInY = 0;
  //    for (var key in x) {
  //      thingsInX++;
  //    }
  //    for (var key in y) {
  //      thingsInY++;
  //    } if (!(key in x) || !deepEqual(x[key] ,y[key])) {
  //      return false; 
  //    }
  //    return true; 
  //   }

    



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
