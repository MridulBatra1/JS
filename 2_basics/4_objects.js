// node 2_basics/4_objects.js

const tinderUser = {} // singleton object

tinderUser.id = "123"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mridul",
            lastname: "Batra"
        }         
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2} //objects inside object
// console.log(obj3);

const obj4 = Object.assign({},obj1, obj2)
// console.log(obj4);

const obj5 = {...obj1, ...obj2} // spread
// console.log(obj5);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

// console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
