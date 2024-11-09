// node 3_basics/1_functions.js

function sayMyName(){
    console.log("Mridul");
    
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2); 
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,4)
// console.log(result);


function loginUserMessage(username = "sam") {
    if (username === undefined) {
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mridul"));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) { 
    return num1 // 400,500
}

// console.log(calculateCartPrice(200,300,400,500));

const user = {
    username: "Mridul",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

// handleObject({
//     username: "sam", 
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 600]));