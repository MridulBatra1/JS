// node 5_iterations/one.js

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("hello world");      
    }
    //console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
       // console.log(`Inner loop value ${j} and inner loop ${i}`);
       // console.log(i + '*' + j + '=' + i*j);  
    }
}

let myarray = ["a", "b", "c"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}