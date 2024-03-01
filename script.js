'use strict';
// values and variables ////////////////

// Declare variables called country, continent and population and assign their
// values according to your own country (population in millions).

// Log their values to the console.

let country = 'India';
let continent = 'Asia';
let population = 1407.6;

console.log(country);
console.log(continent);
console.log(population);

// data types //////////////////////////

// Declare a variable called isIsland and set its value according to your country.
// The variable should hold a Boolean value. Also declare a variable language,
// but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.

let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var ///////////////////////

// Set the value of language to the language spoken where you live
// (some countries have multiple languages, but just choose one).

language = 'Tamil and Others';

// Think about which variables should be const variables
// (which values will never change, and which might change?).
// Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.

// basic operators /////////////////////

// If your country split in half, and each half would contain half the population,
// then how many people would live in each half?

const halfPopulation = population / 2;
const firstHalfCountry = halfPopulation;
const secondHalfCountry = halfPopulation;
console.log(firstHalfCountry, secondHalfCountry);

// Increase the population of your country by 1 and log the result to the console.

let tempPopulation = population * 1000000;
tempPopulation++;
console.log(tempPopulation);

// Finland has a population of 6 million. Does your country have more people than Finland?

const populationFinland = 6;
const isMore = population > populationFinland;
if (isMore) {
    console.log('Yes');
};

// The average population of a country is 33 million people. Does your country have less
// people than the average country?

let averagePopulation = 33;
if (population > averagePopulation) {
    console.log('No');
};

// Based on the variables you created, create a new variable description which contains a string
// with this format: 'Portugal is in Europe, and its 11million people speak portuguese'.

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language + " .";
console.log(description);

// strings and template literals //////////////////////////////

// Recreate the description variable from the last assignment,
// this time using the template literal syntax.

description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

// taking decisions: if/else statements /////////////////////////////

// If your country's population is greater than 33 million,
// log a string like this to the console: "Portugal's population is 22 million below average"
// (the 22 is the average of 33 minus the country's population).

if (population > averagePopulation) console.log(`${country}'s population is ${population} million above average.`);

// After checking the result, change the population temporarily to 13 and then to 130.
// See the different results, and set the population back to original.

population = tempPopulation;
console.log(population);

tempPopulation = 130;
console.log(tempPopulation);

population--;
population = population / 1000000;
console.log(population);

// type conversion and coercion //////////////////////////////

// Predict the result of these 5 operations without executing them:

// console.log('9' - '5'); // -> ?
// console.log('19' - '13' + '17'); // -> ?
// console.log('19' - '13' + 17); // -> ?
// console.log('123' < 57); // -> ?
// console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

// Execute the operations to check if you were right.

console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

// equality operators: === vs == ////////////////////////////

// Declare a variable numNeighbours based on a prompt input like this:

const numNeighbours = 10;// Number(prompt('How many neighbour countries does your country have?'));
console.log(numNeighbours);

// If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

if (numNeighbours === 1) {
    console.log('Only 1 borders!');
} else if (numNeighbours > 1) {
    console.log('More than 1 borders!');
} else if (numNeighbours === 0) {
    console.log('Exactly no borders!');
} else if (numNeighbours === '') {
    console.log('You didn\'t put any value!');
} else {
    console.log('Don\'t type any strings! Give the number only!');
};

// Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

// Use an else block to log 'No borders' (this block will be executed when
// numNeighbours is 0 or any other value).

// Test the code with different values of numNeighbours, including 1 and 0.

// Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens
// when there is exactly 1 border! Why is this happening?

// Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

// Reflect on why we should use the === operator and type conversion in this situation.

// logical operators //////////////////////////////////

// Comment out the previous code so the prompt doesn't get in the way.

// Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English,
// has less than 50 million people and is not an island.

// Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria.
// Take your time with this, and check part of the solution if necessary.

// If yours is the right country, log a strings like this 'You should live in Portugal :)'.
// If not, log 'Portugal does not meet your criteria :)'.

if (language !== 'English' && population > 50 && !isIsland) {
    console.log(`${country} does not meet your criteria`);
}

// Probably your country does not meet all the criteria. So go back and temporarily change some
// variables in order to make the condition true (unless you live in Canada :D).

country = 'Portugal';
continent = 'Europe';
language = 'English';
population = 40;
isIsland = true;

if (language === 'English' && population < 50 && isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}

// the switch statement ///////////////////////////////

// Use a switch statement to log the following string for the given language:
// chinese or mandarin: 'MOST number of native speakers!';
// spanish: '2nd place in number of native speakers';
// english: '3rd place';
// hindi: 'Number 4';
// arabic: '5th most spoken language';
// for all other simply log 'Great language too :D'.

language = 'tamil';

switch (language) {
    case 'chinese':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too!');
}

// the conditional(ternary) operator /////////////////////

// If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: "Portugal's population is above average".
// Otherwise, simply log "Portugal's population is below average".
// Notice how only one word change between these two sentences!

let isAverage = population > averagePopulation ? `${country}'s population is above average` : `${country}'s population is below average`;
console.log(isAverage);

// After checking the result, change the population temporarily to 13 and then to 130.
// See the different results, and set the population back to original.
population = 1407.6;

console.log(`${country}'s population is ${population > averagePopulation ? `above` : `${population === 130 ? `equal` : `below`}`} average`);