// node 3_basics/3_arrow.js

const user = {
    username: "Mridul",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "Mridul"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


const chai = () => {
    let username = "hitesh"
    console.log(this); 
}
// chai()

// const addTwo = (num1, num2) =>
// {
//     return num1 + num2      
// }

// const addTwo = (num1, num2) => num1 + num2   

// const addTwo = (num1, num2) => (num1 + num2 )

const addTwo = (num1, num2) => ({username: "Hitesh"} )
    
console.log(addTwo(3,4));

