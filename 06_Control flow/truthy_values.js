//yha hume pta chla ki truthy aur falsy values ky hoti hai
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// **************************** falsy values **************************************

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//***************************** truthy values *************************************
// "0", 'false', " ", [], {}, function(){}

// Note: khali array aur khali object bhi true consider hota hai

//khali array
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

//khai object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined
//kelisense operator ternary operator se alag hota hai
// ?? iska mtlb ye h ki by chance agr koi value null ya undef reh jaati h to hum second value consider krenge
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);


//it is different 
// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")