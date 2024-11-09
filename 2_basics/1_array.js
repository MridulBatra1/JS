// node 2_basics/1_array.js

const arr = [0,1,2,3,true,"Mridul"]

const myArr = new Array(1,2,3)
// console.log(arr[4]);

//Array meathods

myArr.push(8);
myArr.pop()

myArr.unshift(10) // insertion at start
myArr.shift()     // deletion at start

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(8));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) //(edges are not included)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) //makes changes to the original array (includes the edges)
console.log("C ", myArr);
console.log(myn2);

