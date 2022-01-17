// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time) {
    console.log(`${greeting} ${location} ${time}`);
}



// 2.
var contestants = function() {
    let entries = [];
    for (var i = 0; i < dogs.length; i++) {
        entries.push(dogs[i]);
    }
    return entries.length;
}



// 3.
var filterSpecies = dogs.filter(function(individual){
    return individual.species === 'dog'; // resolves to an array of only dog objects
});




// 4. 
var dogContestants = [...filterSpecies];



// 5. 
var dogsWithClasses = dogContestants.map(function(dog){
    if (dog.weight > 0 && dog.weight <= 10) {
        dog.class = 'red';
    } else if (dog.weight >= 11 && dog.weight <= 20) {
        dog.class = 'yellow';
    } else {
        dog.class = 'green'; 
    }
    return dog; 
});
    


// 6.
var firstInClass = function(top, output={}) {
    // base
    // if input array is empty
    if (top.length === 0) {
        return output;
    }
    // recurrsion
    Object.assign(output, top[0]); // copy the key/value pairs from top[0] into output
    return firstInClass(top.slice(1), output);
}

// anytime a recursive problem wants to return a complex data type, then initialize a default 
// variable as a parameter!!!!!!!!!!



// 7.
var votes = dogs.reduce(function(voteTotal, animalObj){
    voteTotal += animalObj.votes; // voteTotal = 0 + 22 => 22
    return voteTotal; // 22 on first iteration
                        // 22+5 on 2nd iteration => 27
                          // 27 +.... 
}, 0);