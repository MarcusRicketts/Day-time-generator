

//////////////////////////////////////////////////////////////////////////////////////////////

// This is my "Day Trip Generator" code
//

//save a random number to a variable and console log it let random = ...
//create an array with 3-4 destinations
//use that random number variable in brackets with the array, save it to a new variable
//console log that new variable
//if user types no remove previous randomDestination choice out of randomDestination array. 
//if user selects no, make the given randomDestination 0 index in array (this will make it the first element) use then use slice method to remove it
//let newrandomDestination = randomDestinations.splice(0,1,randomDestinations)
// run this loop 4 times until all elements have been given
// if all elements are given are not selected tell users to stay home and relax. =)  
// let userOtherDestinaatoin = prompt("Ok. Do you want to go to " + randomDestinations + "? ")





// Below is a list of arrays

let destinationsArray = ["west", "east", "north", "south"];
let entertainmentArray = ["movie", "football game", "talent show", "farmers market"]
let modeOfTravelArray = ["bus", "Uber", "bike", "walk" ]
let restaurantsArray = ["pizza", "chilli", "ice cream", "soup"];

// This function will randomly return elements of an array.
function randomSelection(inputArray){
    let selectionOfThing = inputArray[Math.floor(Math.random() * inputArray.length)]
    return selectionOfThing;
}

// This function will randomly present a list of places to visit
// function destinationGenerator(){
//     let askUser = true;
//     while( askUser === true ){
//         destinationsArray;
//         let randomDestinations = randomSelection(destinationsArray)
//         let userChoice = prompt(randomDestinations + " is a great place to visit. Do you want to go? Type yes or no")
//         if(userChoice === "yes"){
//             alert(randomDestinations + " Will be fun"); 
//             return randomDestinations + askUser === false;

//         }
//         else{
//             alert("Ok. Here is another option. ");
//         }
//     }
// }

// destinationGenerator()

// This function will randomly present a list of food option
// function restaurantGenerator(){
//     let askUser = true;
//     while( askUser === true ){
//         restaurantsArray;
//         let randomrestaurant = randomSelection(restaurantsArray);
//         let userChoice = prompt( "Do you want to eat " + randomrestaurant +"?" + " Type yes or no")
//         if(userChoice === "yes"){
//             alert(randomrestaurant + " It is"); 
//             return randomrestaurant + askUser === false;

//         }
//         else{
//             alert("Ok. Here is another option. ");
//         }
//     }
// }

// restaurantGenerator()

// This function will randomly present a list of entertainment
// function entertainmentGenerator(){
//     let askUser = true;
//     while( askUser === true ){
//         entertainmentArray;
//         let randomentertainment = randomSelection(entertainmentArray);
//         let userChoice = prompt( "Do you want to go to a " + randomentertainment  +"?" + " Type yes or no")
//         if(userChoice === "yes"){
//             alert(randomentertainment + " It is"); 
//             return randomentertainment + askUser === false;

//         }
//         else{
//             alert("Ok. Here is another option. ");
//         }
//     }
// }
// entertainmentGenerator()

// This function will randomly present a list of modes of travel.

function modesOfTravelGenerator(){
    let askUser = true;
    
    while( askUser === true ){
        modeOfTravelArray;
        let randomModesOfTravel = randomSelection(modeOfTravelArray);
        let userChoice = prompt( "Do you want to " + randomModesOfTravel  +"?" + " Type yes or no")
        if(userChoice === "yes"){
            alert(randomModesOfTravel + " It is"); 
            return randomModesOfTravel + askUser === false;

        }
        else{
            alert("Ok. Here is another option. ");
        }
    }
}
modesOfTravelGenerator()