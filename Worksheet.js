

//////////////////////////////////////////////////////////////////////////////////////////////

// This is my "Day Trip Generator" code
//

//save a random number to a variable and console log it let random = ...
//create an array with 3-4 destinations
//use that random number variable in brackets with the array, save it to a new variable
//console log that new variable



let restaurants = ["pizza", "chilli", "ice cream", "soup"];
let randonRestraurants = restaurants[Math.floor(Math.random() * restaurants.length)];

let modeOfTravel = ["bus", "Uber", "bike", "walk" ]
let randomModeOfTravel = modeOfTravel[Math.floor(Math.random() * modeOfTravel.length)];

let entertainment = ["movie", "football game", "talent show", "farmers market"]
let randomEntertainment = entertainment[Math.floor(Math.random() * entertainment.length)];

//if user types no remove previous randomDestination choice out of randomDestination array. 
//if user selects no, make the given randomDestination 0 index in array (this will make it the first element) use then use slice method to remove it
//let newrandomDestination = randomDestinations.splice(0,1,randomDestinations)
// run this loop 4 times until all elements have been given
// if all elements are given are not selected tell users to stay home and relax. =)  
// let userOtherDestinaatoin = prompt("Ok. Do you want to go to " + randomDestinations + "? ")



function destinationGenerator(){
    let start = true
    while(start === true){
        let destinationsArray = ["west", "east", "north", "south"];
        let randomDestinations = destinationsArray[Math.floor(Math.random() * destinationsArray.length)];
        let userDestination = prompt(randomDestinations + " is a great place to visit. Do you want to go? Type yes or no")

        if(userDestination === "yes"){
            alert(randomDestinations + " Will be fun"); start = false; 
        }
        else{
            alert("Ok. Here is another option. ")
            //let newDestinationsArray = destinationsArray.splice(randomDestinations, 1);
        }
    }
}

destinationGenerator()


//let destinationsArray = ["west", "east", "north", "south"];
//let randomDestinations = destinationsArray[Math.floor(Math.random() * destinationsArray.length)];
//let newDestinationsArray = destinationsArray.splice(randomDestinations, 1)
