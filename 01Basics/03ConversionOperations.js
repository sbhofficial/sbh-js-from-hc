// let score = true;

// console.log(typeof score);
// console.log(typeof (score));

// let numberValue = Number(score);

// "111aaa" can never convert to string/number, it will show NaN (Not A Number).
// null  will show 0 so take care of it.
// undefined will also show NaN.
// boolean value true will show as 1 and false will show as a 0.
// string "SBH" will never be number, will nerver convert.
//------------------------
// 111 will print 111 (Number)
// 111aaa will print NaN (but it is also number type, NOT A NUMBER)
// true -> 1
// false -> 0

// console.log(typeof numberValue);
// console.log(numberValue);

//------------------------
// let isLoggedIn = 1;
// let convertBoolean = Boolean(isLoggedIn);
// console.log(convertBoolean);

// In boolean() for 1 means true and 0 means false
// "" empty string means false and "sbh" means true

//------------------------

let newNumber = 11;
let stringNumber = String(newNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

// string() will convert number to string type