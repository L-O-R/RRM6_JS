// variables, loop, conditinal statements, operators, functions

console.log("variables");

// let , const and var

let id1 = Symbol("hello");
let id2 = Symbol("hello");

console.log(id1);
console.log(id2);

console.log(id1 === id2);

// operators

// arthemetic operators
//=> + - / * %
let num1 = 2;
let num2 = 5;

console.log("num1 + num2 = ", num1 + num2);
console.log("num1 - num2 = ", num1 - num2);
console.log("num1 * num2 = ", num1 * num2);
console.log("num1 / num2 = ", num1 / num2);
console.log("num2 / num1 = ", num2 % num1);

// assignment oprators
// => = , += , -= , *=, /=, %=
// ++ --
// console.log("num1 = num1 + num2  ", num2 % num1);
console.log("num1 +=  num2  ", (num1 += num2));

//post fix
console.log("num1--", num1--);
console.log("num1 on next line", num1);
console.log("num2++", num2++);
console.log("num1 on next line", num1);

//pre fix
console.log("--num1", --num1);
console.log("num1 on next line", num1);

// comparision operator // boolean oprators
// lhs rhs
// =>  > <
console.log("num1 < num2 is: ", num1 < num2);
console.log("num1 > num2 is: ", num1 > num2);
console.log(num1, " >= ", num2, "is: ", num1 >= num2);
console.log(num1, " <= ", num2, "is: ", num1 <= num2);

let num3 = 4;
let num4 = "4";

console.log("num3 == num4", num3 == num4);
console.log("num3 == num4", num3 == num4);
console.log("num3 != num4", num3 != num4);
console.log("num3 !== num4", num3 !== num4);

// // parseInt => 1, 4 ,9
// // parseFloat => 9.0 , 3.12
// // String(2)
// console.log(2 + parseInt("2"));
// console.log(typeof ("2" + "2"));
// // concat

// logical

// num5 = -4;

// console.log(num5 > 5 && num5 < 20);
// console.log(num5 > 5 || num5 < 20);

// let num6 = 0;
// let num7 = num6 ?? 10;
// console.log(num7);

// console.log(!(2 < 1));

// bitwise operator
//  later

// IF ELSE ELSE IF

let age = 14;

//  block scope
if (age >= 65) {
  console.log("you are senior");
} else if (age >= 18) {
  console.log("you are adult");
} else {
  console.log("you are child");
}

// licence
// if user age is greater than 18 , he can drive else he cannot
// user age = 15 , => wait for 3 more years
// user age = 12 , => wait for 6 more years
// user age = 18 , => you can drive
// user age = 66 , => you are old can't drive

let userage = 10;

if (userage >= 65) {
  console.log("you are old, can't drive");
} else if (userage >= 18) {
  console.log("he can drive");
} else {
  let a = 18 - userage;
  console.log("wait for ", a, " more years");
}

// switch statement
let color = "gray";

switch (color) {
  case "red":
    console.log("stop");
    break;

  case "yellow":
    console.log("get ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("signal lignt not working go home");
    break;
}

//  loops

// for loop

//  when u have a range

// continue / break;
for (let i = 0; i <= 6; i++) {
  if (i % 2 !== 0) {
    continue;
    // break;
  }
  console.log("iteration count: ", i);
}

// for (start_postition; condition/ending_position; increment/decrement){
//     code statement
// }

console.log("-----while Loop-----");

// while(condition){
//   code // statment
// }

let guessNumber = 6;

// let userGuess = parseInt(
//   prompt("Guess the number between 1 and 10")
// );

// console.log(userGuess);
// console.log(guessNumber);

// while (guessNumber !== userGuess) {
//   userGuess = parseInt(
//     prompt("Guess the number between 1 and 10")
//   );
//   console.log(guessNumber === userGuess);
//   console.log(userGuess);
// }

// console.log("you have guess it");

// do while

console.log(
  "-----------------do while ----------------------"
);

// let userGuess;
// do {
//   userGuess = parseInt(
//     prompt("Guess the number between 1 and 10")
//   );
// } while (userGuess !== guessNumber);

// while (false) {
//   console.log("wont be executed");
// }

// for in => array  , for of => object

// array => collection of data || data can be anything or of any data type

// let number1 = 1;
// let number2 = 2;

// data structure
// array literal
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// index    0  1  2                     9
console.log(arr1);

console.log("item 7 is: ", arr1[7]);

console.log(arr1.length);

for (let i = 0; i < arr1.length; i++) {
  console.log("array items are: ", arr1[i]);
}

// for in
console.log("For in loop");

//  in represents key / indexs
for (let i in arr1) {
  //  so here i value is 0
  // edge handles in diffrently
  console.log("array items are: ", i);
}

// of represent itrebale items
for (let i of arr1) {
  // so here i represent array item which is 1, 2,3 ,etc
  console.log(i);
}

// object
// collection of data in key value pairs

// object literals
let obj1 = {
  // key : value
  name: "john",
  age: 30,
  "has Job": true,
};

console.log(obj1);
//  dot notation
console.log(obj1.name);

//  bracket
console.log(obj1["has Job"]);
// block scope
for (let key in obj1) {
  console.log(key, ": ");
  console.log(obj1[key]);
}

// function

console.log("function ------------------");
// name function
//   () => params

// function scope
function add(a, b) {
  console.log("a: ", a);
  console.log("b: ", b);
  // return keyword to return something //**completly optional
  return a + b;
}

// arguments
let addition = add(10, 20);

console.log(addition);

//  life span
// global scope || functional scope || block scope
//new line added
