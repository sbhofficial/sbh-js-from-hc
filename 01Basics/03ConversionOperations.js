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

//console.log(stringNumber);
//console.log(typeof stringNumber);

// string() will convert number to string type


/* ===== Operations ===== */

let numberr = 10
let negetiveNumber = -numberr
// console.log(negetiveNumber);

// Basic Math operations.
// console.log(5+5);
// console.log(5-5);
// console.log(5/5);
// console.log(5%5);
// console.log(5*5);
// console.log(5**5);


// Tricky 
// let string1 = "SBH"
// let string2 = " Official"
// console.log(string1 + string2);

// console.log(7 + "7");
// console.log("7" + 7);
// console.log("7" + 7 + 7);
// console.log(7 + 7 + "7");

//console.log(7 + 7 / 7 * 7); // code is right not valid code, messy code, bad practice, confusing code, not readable properly.

// below code is messy code, no sense, bad practice, confusing code, not readable properly, not preferable.
// console.log(+true); 
// console.log(true+);
// console.log(+"");
// let numbr1,numbr2,numbr3
// numbr1 = numbr2 = numbr3 = 7 + 7

let gameCounter = 111
gameCounter++
console.log(gameCounter);
