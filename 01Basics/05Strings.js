let name = 'SBH'
let id = 70

// console.log("My name is " + name + " and my Id is " + id ); 
// This code is outdated This syntanx and code is ok but this is not good practice and not proper readable.

// console.log(`My name is ${name} and my id is ${id}`); 
// This is called String Interpolation, This is new way to write code, This is good way to write code.


const laptopName =  new String('Lenovo')
// console.log(laptopName); // it will print the whole object and other methods of String
// console.log(laptopName[0]); // it will print the first letter of String
// console.log(laptopName.__proto__); // it will also print the whole object and other methods of String

// console.log(laptopName.length); // it will print the total numbers of length
// console.log(laptopName.toUpperCase()); // it will convert all characters to uppercase and print (NOT IN ORIGINAL VALUE)
// console.log(laptopName.toLowerCase()); // it will convert all characters to lowercase and print (NOT IN ORIGINAL VALUE)
// console.log(laptopName.charAt(5)); // it will show on which position which character is.
// console.log(laptopName.indexOf('n')); // it will show on which character is on which position.
// console.log(laptopName.substring(0, 4)); // it will slice the string, in first we have give position where it will start the slicing and second is how much character you want to slice, and it will not work on negative value.
// console.log(laptopName.slice(-4, 7)); // it is similarly work like substring and it will work on negative value. it is little bit confusing in negative value.

const newLaptop = "     HP     "
console.log(newLaptop.trim()) // it will trim extra spaces from the starting and ending, NOTE: it will not trim the  between space of the words. can find more trim methods from MDN docs.

const numberLink = '123-456abc78-90'
console.log(numberLink.replace('abc', '-')); // it will replace the string what we want, first type where we want to change and sencond is what string.

console.log(numberLink.includes('abc')); // it will search the given characters to the string/variable.

console.log(numberLink.split('-')); // it will remove given value and split from there


// NOTE : there are many methods like above you can check on MDN docs


