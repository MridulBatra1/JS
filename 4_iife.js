// Immediately Invoked Function Expressions (IIFE)
// node 3_basics/4_iife.js

(function chai(){
    // named IIFE (to save from go=lobal scope pollution)
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');