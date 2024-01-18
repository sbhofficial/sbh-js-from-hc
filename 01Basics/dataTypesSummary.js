// Main 2 types of Data types 1. Primitive 2. Non Premitive (Referenc type)

// Primitive 7 categories 
// 1. String , 2. Number , 3. Boolean , 4. Null , 5. Undeifined , 6. Symbol , 7. BigInt (big intiger, scintific values)


let score = 700 // its number or integer data type
let newScore = 70.0 // its number or integer data type

let isLoggedIn = true  // its boolean data type
let isValueEmpty = null  // its null data type, it is empty, and it will return typeof object

let userEmail = undefined // it is undefined data type, we dont need to define "undefined" keyword
let userNewEmail;  // it is undefined data type

// Symbol is used for unique value
let userId = Symbol("007") // it is Symbol data type
let newUserId = Symbol("007") // it is Symbol data type
// above both variables have unique id/value even both have same value because of Symbol data type

let bigNubmer = 987654123456789098765213456n; // in the end of value if we add 'n' keyword it wil be 'BigInt' data type



// Non Primitive (Referenc type) 3 categories
// 1. Array , 2. Objects , 3. Functions

let myHeroes = ['Lal Bahadur Shashtri' , 'Subhash Chandra Bose' , 'Mohandas Karamchand Gandhi'] // it will return typeof object

let myDetails = { name : 'SBH', age : 20, favLaptop : 'Lenovo'} // it will return typeof object

let newFunction = function() {  // it will return typeof function
    console.log('This is Function');
}

/* ====================== Memory in JavaScript ====================== */

// Stack memory (Primitive use Stack memory), Heap memory (used Non Primitive)

let userOfficeEmail = 'sbhofficial@gmail.com' // it will store in Stack memory
let anotherEmail = userOfficeEmail // it will add copy of userOfficEmail to anotherEmail
anotherEmail = 'useremail@email.com' // store new value in anotherEmail

console.log(userOfficeEmail); // in variable it is give the copy data of previous variable not giving original data
console.log(anotherEmail); // in variable it is give the copy data of previous variable not giving original data

// NOTE : In above variables it is give the copy data of previous variable not giving original data, thats why both values are different


let userData1 = {
    emailAddress : 'userEmail@email.com',
    userUPI : 'userUPI@upi'
} // This object data will store in Heap memory, this userData variable store in Stack memory and it object will store in heap memory userData will give reference from Heap memory

let userData2 = userData1 // in this object it will give original reference/value

userData2.email = 'sbhOfficial@email.com'

console.log(userData1.email); // it will update latest record in both object
console.log(userData2.email); // it will update latest record in both object

// NOTE : In above objectss it is give the reference/original data of previous object, thats why both values are same