// node 5_iterations/five.js

const coding = ['js', 'ruby', 'cpp', 'python']

coding.forEach( function (item) {
    //console.log(item);
} )

coding.forEach( (greet) =>  {
    // console.log(greet);
} )

// function printME(item) {
//     console.log(item); 
// }

// coding.forEach(printME)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr); 
} )

const myCoding = [
    {
        langName: "JS",
        langFileName: "Js"
    },
    {
        langName: "CPP",
        langFileName: "CPP"
    },
    {
        langName: "Python",
        langFileName: "Python"
    },
]

myCoding.forEach( (item) => {
    console.log(item.langName);
    
} )



