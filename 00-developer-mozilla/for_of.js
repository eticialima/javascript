// Iterando sobre um Array
let iterable = [10, 20, 30]; 
for (let value of iterable) {
    console.log(value);
} // 10 // 20 // 30


let iterable = [10, 20, 30]; 
for (const value of iterable) {
    console.log(value);
} // 10 // 20 // 30



// Iterando sobre uma String
let iterable = "boo"; 
for (let value of iterable) {
    console.log(value);
} // "b" // "o" // "o"


// Iterando sobre uma TypedArray
let iterable = new Uint8Array([0x00, 0xff]);
for (let value of iterable) {
    console.log(value);
} // 0 // 255


// Iterando sobre um Map
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]); 
for (let entry of iterable) {
    console.log(entry);
} // [a, 1] // [b, 2] // [c, 3]

for (let [key, value] of iterable) {
    console.log(value);
} // 1 // 2 // 3


// Iterando sobre um Set
let iterable = new Set([1, 1, 2, 2, 3, 3]); 
for (let value of iterable) {
    console.log(value);
} // 1 // 2 // 3


// Iterando sobre um objeto arguments
(function () {
    for (let argument of arguments) {
        console.log(argument);
    }
})(1, 2, 3); // 1 // 2 // 3


