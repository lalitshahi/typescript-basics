// *********************************** LESSON 1 - COMPILING TYPESCRIPT ***********************************

const character = "Lalit";

console.log(character);

const inputs = document.querySelectorAll("input");

console.log(inputs);

// tsc <ts filename>  ====> to compile the TS file into vanila JS

// tsc <ts filename> -w  ====> to complie the TS file into vanila JS and watch for every change in the TS file

// *********************************** LESSON 2 - TYPES BASICS ***********************************

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


// *********************************** LESSON 3 - OBJECTS & ARRAYS ***********************************

/*
* ARRAYS
*/

const ages = [20, 30, 40]; // By defining an array with a specific type of values we set rule that only numbers can be added to this array.

// ages[1]= '50'; // Type 'string' is not assignable to type 'number'.

ages.push(50); // This will work
// ages.push('50');  ==== This wont work -- Argument of type 'string' is not assignable to parameter of type 'number'.

const namesAndAges = ["Shahi", 28, "Lalit", 27]; // We have set the rule that this array can contain values of STRING and NUMBER type

namesAndAges[1] = 30; // Now the value can be either the string or a number but it can not be of any other type

// namesAndAges.push(false); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

/*
* OBJECTS
*/

let book = {
    title: 'Typescript Handbook',
    cost: 280,
    author: 'ABC',
}

/*
 The object definition in typescript also works the same way as the normal variable
    It can be of only OBJECT TYPE and 
    it can only have the same number of keys inside it and
    the keys inside the object can have the values of the same type as in the object definition
    AND no extra key can be added to the object - It is strict but prevents a lot of bugs.
 */


// *********************************** LESSON 4 - EXPLICIT TYPES  ***********************************

let characterName: string; // Can save only string values
let characterAge: number;  // Can save only number values
let characterJob: string; 
let characterFriends: string[] = [];  // Can save only string values in this array
let characterRandomData: (string | number)[] = []; // Can save both string and arrays ---- UNION TYPES ---
let characterInfoObject1: {};  // Can create an object
let characterInfoObject2: object;  // Can create an object or an Array
let characterInfoObject3: { // Can have only the following keys in the object
    name: string,
    age: number,
    job: string
}

characterName = "Shahi";
characterAge = 28;
characterJob= "Frontend Dev";
characterFriends = ["John", "Jane"];
characterInfoObject1 = {
    name: "shahi"
};
characterInfoObject1 = {
    name: "shahi",
    age: 28
};
characterInfoObject2 = {
    name: "shahi",
    age: 28,
    job: 'frontend dev',
    isNoobDev: true
}

characterInfoObject2 = ["shahi", 27, 'frontend dev', true];

/*
characterInfoObject3={ // Type '{ name: string; }' is missing the following properties from type '{ name: string; age: number; job: string; }': age, job
    name: "shahi",
}
 */

characterInfoObject3 = {
    name: 'shahi',
    age: 20,
    job: 'frontend dev',
    // skills: ["React", "React Native"]  
    /* 
    Type '{ name: string; age: number; job: string; skills: string[]; }' is not assignable to type '{ name: string; age: number; job: string; }'.
    Object literal may only specify known properties, and 'skills' does not exist in type '{ name: string; age: number; job: string; }
    */
}

let anyTypeVariable: any; // Using any makes the variable a flexible variable type, we can set a value of any type to the varaible

anyTypeVariable = 20;
anyTypeVariable =  "shahi";
anyTypeVariable =  true;

