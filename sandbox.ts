// Lesson 1 - Compiling Typescript

const character = "Lalit";

console.log(character);

const inputs = document.querySelectorAll("input");

console.log(inputs);

// tsc <ts filename>  ====> to compile the TS file into vanila JS

// tsc <ts filename> -w  ====> to complie the TS file into vanila JS and watch for every change in the TS file

// Lesson 2 - Types Basics

let person = "Shahi";
let age = 28;
let isDevNoob = true;

// Typescript does not allow to change the type of the variable once defined

// person = 20; // This won't work - Typescript compiler will give error at compliling phase

person = "FrontendBro";  // Variable's value can be change by the same type of value

isDevNoob = false;

// let countTotalCommits = (commits, days) => {
//     console.log(commits * days)
//     return commits * days;
// }

// Expects 2 args but given only 1, so issue is found and fixed at the compiling stage.
// countTotalCommits("Shahi"); 

// Does not show any error on compilation Until argument type is not defined.
// countTotalCommits("shahi", 30); // Returns NaN



let countTotalCommits = (commits: number, days: number) => {
    console.log(commits * days)
    return commits * days;
}

// countTotalCommits("shahi", 30); // Gives compilation error, argument expected of type number but provided as string.

countTotalCommits(10, 30);
