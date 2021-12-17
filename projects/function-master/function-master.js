//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
// return a new array so set a new array 
let newArr = [];
        // iterate throught the object
    for (var key in object) {
        // push the objects key values into a new array 
    newArr.push(object[key]); 
    }
    // return the new array 
    return newArr; 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
// new string variable to use later 
let newString = '';
for (var key in object) {
    if (newString === '') {
        newString += key; 
    } else {
        newString += ` ${key}`; 
    }
} 
return newString; 

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
newArray = [];
for (var key in object) {
   if (typeof(object[key]) === 'string')  {
    newArray.push(object[key]); 
   }
}
return newArray.join(' '); 
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array'; 
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var newString = string.split('');
    newString[0] = newString[0].toUpperCase(); 
return newString.join(''); 

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    newThang = string.split(''); 
    newThang[0] = newThang[0].toUpperCase(); 
    for (var i = 0; i < newThang.length; i++) {
        if (newThang[i] === " ") {
            newThang[i+1] = newThang[i+1].toUpperCase();
        }
    }
    return newThang.join(''); 
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
let newThang = ''; 
    for (var key in object) {
        if (object[key]) {
            newThang = object[key]; 
        }
    }
return capitalizeAllWords(`Welcome ${newThang}!`);
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`; 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
let ans = 'there are no noises';
for (var key in object) {
 if (key === 'noises' && object['noises'].length > 0) {
        ans = object.noises.join(' '); 
    }
 
    }
    return ans;
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    let newString = string.split(' '); 
    let newVar = false; 
    for (var i = 0; i < newString.length; i++) {
        if (newString[i] === word) {
           newVar = true; 
        } 
    }
return newVar; 

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name); 
    return object; 

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    let newVar = false;
    for (var key in object) {
    if (object.hasOwnProperty('friends')) {
        for (var i = 0; i < object.friends.length; i++) {
            if (object.friends[i] === name) {
                return true; 
            }
        }
    }
}
  return newVar; 
}


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let newArray = []; 
    for (let i = 0; i < array.length; i++) {
        if (isFriend(name, array[i]) === false) {
            if(array[i].name !== name) {
                newArray.push(array[i].name);
            } 
        } 
    }
    // console.log(newArray); 
    // console.log(name); 
    return newArray; 
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value; 
    return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object) {
        for (var i = 0; i < array.length; i++) {
            if (key === array[i]) {
                delete object[key]; 
            }
            // console.log(array[i]);
            // console.log(object[key]); 
        }
    }
    // console.log(object); 
    // console.log(array); 
    return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
                if (array[i] === array[j] && i !== j) {
                    array.splice(j, 1); 
                    j = 0;
                     
                }
        }

    }
    console.log(array);
    return array;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}