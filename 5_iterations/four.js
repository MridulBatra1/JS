// node 5_iterations/four.js

const myObject = {
    js: 'Javascript',
    cpp: 'C++',
    rb: 'Ruby'
}

for (const key in myObject) {   // for in loop
   // console.log(`${key} shortcut for ${myObject[key]}`);
}

const prog = ["js", "cpp", "ruby"]

for (const key in prog) {
    // console.log(key); // only keys get printed in the for-in loop

    // console.log(prog[key]);
}


// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); //not possible for for in loop
// }