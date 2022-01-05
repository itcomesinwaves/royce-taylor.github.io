// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');
const object = require('underbar/object');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./royce-taylor.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // use filter function to return an array of ONLY the male customers
    var males = _.filter(array, function(customer){
        return customer.gender === 'male'; 
        // this will resolve to an array of only male customer objects
        });
    return males.length;  
};

var femaleCount = function(array) {
    // use reduce to return the number of female customers
    var numFemales = _.reduce(array, function(females, customer, index){
        // determine if the current customer has a gender of female 
        if (customer.gender === 'female') {
            // if true, add 1 to the females accumulator value
           females += 1; // females = current value (starts at 0) + 1 
        }
        return females;  // 1
    }, 0);// return the number of female customers 
    return numFemales; 
}

// var oldestCustomer = function(array) {
//     let old = _.reduce(array, function(customer, age){
//       if (customer.age > customer.age) {
//           return customer.name; 
//       }
//     }); 
var oldestCustomer = function (array) {
    const oldestObj = _.reduce(array, function (previous, current) {
      if (previous.age > current.age) {
        return previous;
      } else {
        return current;
      }
    });
    return oldestObj.name;
  };



var youngestCustomer = function(array) {
  const youngestObj = _.reduce(array, function(previous, current) {
    if (previous.age < current.age) {
      return previous;
    } else {
      return current;
    }
  });
  return youngestObj.name; 
}

var averageBalance = function(array) {
  let totalBalance = _.reduce(array, function(accumulator, current) {
    let re = /[$,]/gi; 
    let newer = current.balance.replace(re, ''); 
    return parseFloat(newer) + accumulator;     
  }, 0); 
return totalBalance / array.length; 
}
 // iterate through the customers array 
// access each of the objects within the array and its properties to find the balance

//convert the balance values from a string without the commas and dollar signs to numbers
// add them together, then divide by the length


  // let meanBalance = _.reduce(array, function(accumulator, current){
    //   let re = /[$,]/;
    //   current.balance.re;
    //   accumulator += current.balance;    
      
    //   meanBalance /= accumulator; 
    // }, 0); 
    // return meanBalance;
    // };

var firstLetterCount = function(array, letter) {
 let allMatching = []; 
  // iterate through customers array, and access it's name property within each object 
    _.each(array, function(curry){
    var currentLet = curry.name.charAt(0);
    if (letter.toUpperCase() === currentLet.toUpperCase()) {
      return allMatching.push(currentLet);
      
    }

  });
  return allMatching.length; 
}

var friendFirstLetterCount = function(array, customer, letter) {
// iterate through the array of objects and access then names and check that names friends 
let ans = 0; 
  _.each(array, function(current, index, array){
    if (current.name === customer) {
      _.each(current.friends, function(current, index, array) {
        if (current.name.charAt(0).toUpperCase() === letter.toUpperCase()) {
          ans++;
        }
      })
    }
  })
  return ans

}
// let returnArray = []; 
//   _.each(array, function(current) {
//   if (array['name'] === customer) {
//     let firstLetter = current.friends.name.charAt(0);
//       if (firstLetter.toUpperCase() === letter.toUpperCase()) {
//         return returnArray.push(); 
//     }
//   }
// }); 
//  return returnArray.length; 



// if the letter matches the first letter of any of their friends 

// collect those names into an array 
// return it's length


var friendsCount = function(array, name) {
let returnArray = [];
  _.each(array, function(custy, index, array) {
    _.each(custy.friends, function(friend, index, array) {
      if (friend.name === name) {
        returnArray.push(custy.name); 
      }
    });
  });
  return returnArray;
}

var topThreeTags = function(array) {
 let outputArray = [];
  let totalObj = {};
 let greatestNum = 0;
 _.each(array, function(current, index, array) {
    _.each(current.tags, function(tag, index, array) {
      if (totalObj[tag]) {
          totalObj[tag]++; 
        if (greatestNum < totalObj[tag]) {
          greatestNum = totalObj[tag];
        }
      } else {
        totalObj[tag] = 1;
        if (greatestNum < totalObj[tag]) {
          greatestNum = totalObj[tag]; 
        }
      }
    });
    //console.log(greatestNum); 
  //console.log(totalObj);
  });
  totalObj = Object.entries(totalObj);
  _.each(totalObj, function(tag, num, array) {
    if (tag[1] === greatestNum) {
      outputArray.push(tag[0]);
    }
  });
  return outputArray;
}



var genderCount = function(array) {
let genders = {};
_.each(array, function(customer, index, array) {
  if (genders[customer.gender]) {
      genders[customer.gender]++;  
  } else { 
      genders[customer.gender] = 1; 

    }
});
return genders; 

}
  //   let totalObj = {};
//   _.each(array, function(current, index, array) {
//     _.each(current.gender, function(gen, index, array){
//         if(totalObj[gen]) {
//           totalObj[gen]++;
//         } else {
//           totalObj[gen] = 1; 
//         }
//     });
//   });
// return totalObj;
//}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
