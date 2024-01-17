// Basic Comparision
// console.log(7 > 6); // same data type
// console.log(7 >= 6); // same data type
// console.log(7 <= 6); // same data type
// console.log(7 < 6); // same data type
// console.log(7 == 6); // same data type
// console.log(7 != 6); // same data type


// Confusing conversion/comparision, not clean code, try to avoide this type of code, not preferable in Typescript, there is no possibility to compare different data types.
console.log("7" > 6); //differnt data types
console.log("17" > 6); //differnt data types
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// Comparision and equality check both are different thing.

// Strict check (it is also check data type)

console.log("7" === 2);
