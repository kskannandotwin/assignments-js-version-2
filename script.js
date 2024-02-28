// values and variables ////////////////

// Declare variables called country, continent and population and assign their
// values according to your own country (population in millions).

// Log their values to the console.

const country = 'India';
const continent = 'Asia';
const population = 1407.6;

console.log(country);
console.log(continent);
console.log(population);

// data types

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

// let, const and var

// Set the value of language to the language spoken where you live
// (some countries have multiple languages, but just choose one).

language = 'Tamil and Others';

// Think about which variables should be const variables
// (which values will never change, and which might change?).
// Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.

// basic operators

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

const averagePopulation = 33;
if(population > averagePopulation) {
    console.log('No');
};

// Based on the variables you created, create a new variable description which contains a string
// with this format: 'Portugal is in Europe, and its 11million people speak portuguese'.

let description = country + " is in " + continent + ", and its " + population + " million people speak " + language + " .";
console.log(description);

// strings and template literals

// Recreate the description variable from the last assignment,
// this time using the template literal syntax.

description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);




