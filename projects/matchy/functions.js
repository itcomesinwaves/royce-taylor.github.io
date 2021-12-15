/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */


//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    ans = null;
    for (var i = 0; i < animals.length; i++){
        for (var key in animals[i]) {
            if (key === 'name') {
               if (animals[i][key] === name) {
                   ans = animals[i];
               }
            }
        }
    } 
    return ans; 
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for (var i = 0; i < animals.length; i++) {
        for (var key in animals[i]) {
            if (animals[i][key] === name) {
                // referncing the object and assignign it the replacement 
                animals[i] = replacement; 
            }
        }
    }

}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
for (var i = 0; i < animals.length; i++) {
    for (var key in animals[i]) {
        if(animals[i][key] === name) {
            // referecne the array instead of the object (animals[i])
            animals.splice(i, 1);  
        }
    }
}

}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    let name = false; 
    let species = false; 
    if (animal.hasOwnProperty('name')) {
        if (search(animals, animal.name) === null) {
            if (animal.name.length > 0) {
                name = true;
            }
        } 
     }
    if (animal.hasOwnProperty('species')) {
        if (animal.species.length > 0) {
            species = true; 
        }
    } 
    if (name === true && species === true) {
        animals.push(animal); 
    }

}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
// const { isNull } = require("lodash");
// const { animal } = require("./data");