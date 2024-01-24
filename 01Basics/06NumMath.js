const score = 777 // by default it is number type
// console.log(score); // it is showing only number.

const balance = new Number(101); // specifying that it is number.
// console.log(balance); // it will show type of the data and it will also show some value object.

// console.log(balance.toString()); // it will convert number to string type
// console.log(balance.toString().length); // it will show the length of data.

// console.log(balance.toFixed(2)); // it is use in showing precision value (add "." point value);
const newNumberr = 102.02045
// console.log(newNumberr.toPrecision(3)); // it will show only precise values from the beginning, so take care of given round bracket value, make sure how much number of value you want.

const newPrice = 213456548
// console.log(newPrice.toLocaleString()); // it will add comma "," int the number, by default it is adding in US standard.(is is use in showing price)
// console.log(newPrice.toLocaleString('en-IN')); // to showing preticular country value you have to add in the round bracket. for more formate you can check in MDN docs.


/*============= Math =============*/

// console.log(Math); // you can check values in object in browser console.

// console.log(Math.abs(-7)); // absolut value is use for change negative value to positive value, it's only convert negative to positive value.
// console.log(Math.round(7.4)); // it will round up the value.
// console.log(Math.ceil(6.3)); // it will select top/next value from after point.
// console.log(Math.floor(6.3)); // it will select bottom/previous value from after point.
// console.log(Math.min(4,8,9,6,2)); // it will show the minimum value from some values
// console.log(Math.max(5,3,7,1,10)); // it will show the maximum value from some values

console.log(Math.random()); // it will give value between 0 to 1, it can be 0 or 1 also.
console.log((Math.random()*10) + 1); // it will shift the point value, added +1 because some time random give 0 value so.
console.log(Math.floor(Math.random()*10) + 1); // it will round that lowest point value.

const maxValue = 20
const minValue = 10

console.log(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);
// it is common formula to get value from between given two values, little bit tricky but very usefull formula.