const marvel_heros = ['thor', 'ironman', 'spiderman']
const dc_heros = ['superman', 'flash', 'batman']
const powerRangers = ['red ranger', 'green ranger']
console.log(marvel_heros)
console.log(dc_heros)

// this will not append elememnts of dc_heros into marvel_heros
// rather it will insert dc_heros array as one entity into the marvel_heros
marvel_heros.push(dc_heros);
console.log(marvel_heros)
// output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][2])


// array methods

// 1. concat: returns new array
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

// alternative for concat: spread operator
const allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros)

// merge more than 2 arrays
const ultimateHeros = marvel_heros.concat(dc_heros, powerRangers)
const ultimateHeros2 = [...marvel_heros, ...dc_heros, ...powerRangers]
console.log(ultimateHeros)
console.log(ultimateHeros2)

// 2. flat(depth)
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]]
console.log(another_array)
const flat_array = another_array.flat(3)
// const flat_array = another_array.flat(Infinity) :  if depth not known, then write Infinity
console.log(flat_array)

// convert any type to array: used when we web scrap data we dont know data is in which type
console.log(Array.isArray("Amrik"));
console.log(Array.from("Amrik"));
console.log(Array.from({name: "Amrik"})); // gives empty array as we need to tell form array using key


let score1 = 100, score2 = 200, score3 = 300;
console.log(Array.of(score1, score2, score3))