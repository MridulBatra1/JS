// node 2_basics/3_objects.js

// object Literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Mridul",
    "full name": "Mridul Batra",
    [mySym]: "mykey1", 
    age: 19,
    location: "Delhi",
    email: "abc@gmail.com",
    isLoggedIn: false
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]); 
// console.log(jsUser[mySym]);

jsUser.email = "xyz@gmail.com"
// Object.freeze(jsUser) //no more changes will be done
jsUser.email = "xyzdd@gmail.com"
// jsUser.name = "dxcf"

// console.log(jsUser);

jsUser.greeting = function () {
    console.log("hello JS user");
}

jsUser.greeting2 = function () {
    console.log(`Hello JS USer, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());





