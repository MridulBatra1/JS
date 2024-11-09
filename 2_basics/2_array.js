// node 2_basics/2_array.js

const heros1 = ["A","B","C"]
const heros2 = ["X", "Y", "Z"]

// heros1.push(heros2) //array inside array
// console.log(heros1);
// console.log(heros1[3][0]); //"X"

const allHeros = heros1.concat(heros2) 
// console.log(allHeros);

const newHeros = [...heros1, ...heros2] // same as concat (spread operator)
// console.log(newHeros);

const another_array = [1,2,3,[4,5,6],7,[[6,7],[4,5]]]

const real_another_array = another_array.flat(Infinity) //all subarray elements show in one array
// console.log(real_another_array);

console.log(Array.isArray("abc"));
console.log(Array.from("abc")); // makes into an array
console.log(Array.from({name: "Mridul"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //conversion in array
 

