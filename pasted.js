
/**
 * first: function that takes in an array and a number as it's parameter
 * @param {array, number} : takes in paramter of an array and a number
 *@returns {array} : returns an empty array or an element of an array
 * 
*/
_.first = function(array, number) { // function that takes in an array and a number as it's parameter
    let ans;  // variable declaration to return later 
         if (typeof number !== 'number') { // this line checks if the number being passed in is not a number data type
           ans = array[0];  // if it isn't then the flag variable is assigned to the first element of the array being passed in
        } if (number <= array.length) { // then this checks to see if number is less than or equal to length of the array
            ans = array.slice(0, number); // if so than ans is assigned to the array with the slice method enacated starting at the first index, 
                                         // and then takes out whatever the number being passed in is 
        } if (number > array.length) { // then there's another condition that checks if the number parameter being passed in is greater than the length of the array, 
            ans = array;  // and if so the flag variable is assigned to the value of the array 
        } if (number <= 0 || !Array.isArray(array)) { //then there is a final condition that checks if the number parameter being passed in is less than or equal to zero
                  // or if the number parameter is not an array data type
            ans = [];       // then the flag vairable ans is assigned to the value of an empty array 
    }
   return ans; // the flag variable is then returned with it's newly assigned value based off the parameters passed into it
}  