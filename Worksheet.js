"use strict"

//This is Day 1 worksheet

// Line 6-18 is "Fun With Variables" code
/*let name = prompt("What is your name?");
let birthState = prompt("What state were you born in?");
let sumOfBrothers = prompt("How many brothers do you have?");
let sumOfSisters = prompt("Who many sisters do you have?");

let oneNum = sumOfBrothers;
let anotherNum = sumOfSisters;
let totalSiblings = oneNum*1 + anotherNum*1;

let biography = "Hello! My name is " + name + ". " + "I was born in the great state of " + birthState + ". " + "In total, I have " + totalSiblings + " siblings. ";

console.log(biography);
*/

// Line 20-34 is "Fun with Conditionals" code
/*let age = prompt("How old are you?")
if(age >=16){
        let driveLicense = prompt("Do you have a driving license?")
    if(driveLicense === "Yes"){
        console.log("You can legally drive!")
    }
    else{
        console.log("Sorry, you need a license to legally drive.")
    }
}
else{
    console.log("Sorry, you are not old enough to drive.")
}
*/

//This section of code is "For Loop" cade

//This is a for loop "0-10" and "10-0" loop
/*for(let i= 0; i <=10; i++){
    console.log(i)
}*/
/*for(let i =10; i >= 0; i--){
    console.log(i)
}*/
//////////////////////////////////////////

/*This is a for loop "Packers Loop". 
I had to print every letter of PACKERS on the screen. 
I had to print each letter from top to bottom like this:

p
a
c
k
e
r
s

The code I created is lines 62-88


/*for(let i = 0; i <= 7; i++){
    if(i === 0){
        console.log("p ")
    }
    else if(i === 1){
        console.log("a")
    }
    else if(i === 2){
        console.log("c")
    }
    else if(i === 3){
        console.log("k")
    }
    else if(i === 4){
        console.log("e")
    }
    else if(i === 5){
        console.log("r")
    }
    else if(i === 6){
        console.log("s")
    }
    else{
        console.log("Yes! I did it!!!!")
    }
}
*/
///////////////////////////////
/*let counter = 0

while(counter <5){
    console.log("hello"); counter++
}
*/
//////////////////////////////////////////////


//This is the "Password While Loop" code
/*let validatePassword = true;

while(validatePassword === true){
    let enterPassword = prompt("Enter Your Password");

    if( enterPassword === "happy"){
        alert("Password Validated"); validatePassword = false
    }
    else if(enterPassword !== "happy"){
        alert("Password is not valid. Please try again");enterPassword;
    }
}
*/
//////////////////////////////////////////////////



// "fizzbuzz" code
/*for(let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 ===0){
        console.log("fizzbuzz")
    }
    else if(i % 3 === 0){
        console.log("fizz")
    }
    else if( i % 5 === 0){
        console.log("buzz")
    }
    else{
        console.log(i)
    }
}
*/
//////////////////////////////////////////
/*function reverseAString(){
}

function printToConsole(test){
   console.log(test);
}

printToConsole("Test");
printToConsole("CharlesIs");
printToConsole("TheMan");
*/

//////////////////////////////////////////////////////////////////////////////////////////////

// This is my "Day Trip Generator" code
//

//save a random number to a variable and console log it let random = ...
//create an array with 3-4 destinations
//use that random number variable in brackets with the array, save it to a new variable
//console log that new variable


let randomNum = Math.floor(Math.random() * 4) + 1
console.log(randomNum)

let destinations = ["west", "east", "north", "south"]

//function destinationGenerator()
