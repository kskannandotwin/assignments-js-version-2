"use strict";

// functions ////////////////////////

// Write a function called describeCountry which takes three parameters:
// country, population and capitalCity. Based on this input, the function
// returns a string with this format: 'Finland has 6 million people and
// its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries.
// Store the returned values in 3 different variables, and log them to the console.

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descFinland = describeCountry('Finland', 10, 'Helsinki');
const descIndia = describeCountry('India', 1407.6, 'New Delhi');
const descEngland = describeCountry('England', 56, 'London');
console.log(descFinland);
console.log(descIndia);
console.log(descEngland);

// function declarations and expressions ///////////////////////

// The world population is 7900 million people. Create a function declaration
// called percentageOfWorld1 which receives a population value, and returns
// the percentage of the world population that the given population represents.
// For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice,
// store the results into variables, and log them to the console.

function percentageOfWorld1(population) {
    return ((population / 7900) * 100).toFixed(2);
}

const finPercentage1 = percentageOfWorld1(10);
const indPercentage1 = percentageOfWorld1(1407.6);
const engPercentage1 = percentageOfWorld1(56);
console.log(finPercentage1, indPercentage1, engPercentage1);

// Create a function expression which does the exact same thing, called percentageOfWolrd2,
// and also call it with 3 country populations (can be the same populations).

const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100).toFixed(2);
};

const finPercentage2 = percentageOfWorld2(10);
const indPercentage2 = percentageOfWorld2(1407.6);
const engPercentage2 = percentageOfWorld2(56);
console.log(finPercentage2, indPercentage2, engPercentage2);

// arrow functions ////////////////////////////

// Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.

const percentageOfWorld3 = population => ((population / 7900) * 100).toFixed(2);

const finPercentage3 = percentageOfWorld3(10);
const indPercentage3 = percentageOfWorld3(1407.6);
const engPercentage3 = percentageOfWorld3(56);
console.log(finPercentage3, indPercentage3, engPercentage3);

// functions calling other functions ///////////////////////////

// Create a function called describePopulation. Use the function type you like the most.
// This function takes in two arguments: country and population, and returns a strings like this:
// 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

function describePopulation(country, population) {
    const percentage = percentageOfWorld3(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
    console.log(description);
}

describePopulation('Finland', 10);
describePopulation('India', 1407.6);
describePopulation('England', 56);

// introduction to arrays /////////////////////////////

// Create an array containing 4 population values of 4 countries of your choice.
// You may use the values you have been using previously. Store this array into a
// variable called populations.

describePopulation('China', 1441);
const populations = [10, 1407.6, 56, 1441];

// Log to the console whether the array has 4 elements or not (true or false).
const isFour = populations.length === 4;
console.log(isFour);

// Create an array called percentages containing the percentages of the world population
// for these 4 population values. Use the function percentageOfWorld1 that you created earlier
// to compute the 4 percentage values.

const chiPercentage1 = percentageOfWorld1(1441);
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

// basic array operations(methods) ////////////////////////////

// Create an array containing all the neighbouring countries of a country of your choice.
// Choose a country which has at least 2 or 3 neighbours. Store the array into a variable
// called neighbours.

let country = 'India';
let neighbours = ["Afghanistan", "Bangladesh", "Bhutan", "China", "Maldives", "Myanmar", "Nepal", "Pakistan", "Sri Lanka"];

// At some point, a new country called 'Utopia' is created in the neighbourhood of your selected
// country, so add it to the end of the neighbours array.

neighbours.push('Utopia');
console.log(neighbours);

// Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.

neighbours.pop('Utopia');
console.log(neighbours);

// If the neighbours array does not include the country 'Germany',
// log to the console: 'Probably not a central european country :D'.

if (!neighbours.includes('Germany')) {
    console.log(`Probably not a central european country :D`);
};

// Change the name of one of your neighbouring countries. To do that, find the index of the country
// in the neighbours array, and then use that index to change the array at that index position.
// For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.

neighbours[neighbours.indexOf('China')] = 'Republic of China';
console.log(neighbours);

// introduction to objects ///////////////////////////

// Create an object called myCountry for a country of your choice, containing properties country,
// capital, language, population and neighbours (an array like we used in previous assignments).

const myCountry = {
    country: 'India',
    capital: 'New Delhi',
    language: 'Hindi and Other languages',
    population: 1407.6,
    neighbours: ["Afghanistan", "Bangladesh", "Bhutan", "China", "Maldives", "Myanmar", "Nepal", "Pakistan", "Sri Lanka"],
    checkIsland: function () {
        console.log(this.isIsland = this.neighbours.length === 0 ? true : false);
    },
    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    }
}

// dot vs bracket notation ///////////////////////////////

// Using the object from the previous assignment, log a string like this to the console:
// 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// object methods //////////////////////////////

// Add a method called describe to the myCountry object. This method will log a string to the console,
// similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// see into the myCountry object [created]

// Call the describe method.

myCountry.describe();

// Add a method called checkIsland to the myCountry object. This method will set a new property
// on the object, called isIsland. isIsland will be true if there are no neighbouring countries,
// and false if there are. Use the ternary operator to set the property.

// see into the myCountry object [created]

myCountry.checkIsland();

// iteration: the for loop ///////////////////////////

// There are elections in your country! in a small town, there are only 50 voters. Use a for loop
// to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50):
// 'Voter number 1 is currently voting'.

for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting.`);
}

// looping arrays, breaking and continuing //////////////////////////////

// Let's bring back the populations array from a previous assignment.

// Use a for loop to compute an array called percentages2 containing the percentages of the world population
// for the 4 population values. Use the function percentageWOrld1 that you created earlier.

// Confirm that percentages2 contains exactly the same values as the percentages array that we created
// manually in the previous assignment, and reflect on how much better this solution is.

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}
console.log(percentages2);

// looping backwards and loops in loops ////////////////////////////////

// Store this array of arrays into a variable called listOfNeighbours:
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// Log only the neighbouring countries to the console, one by one, not the entire arrays.
// Log a string like 'Neighbour: Canada' for each country.

// You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if
// it's too difficult for you! But you can still try to figure this out anyway

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}