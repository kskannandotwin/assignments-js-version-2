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