// Variables  let / const

let myVariable = 1;
const myOtherVariable = 2;

// Operators  ++, --, +=, -=, *=, /=, +, -, /, *

// Data Types
// Number / Int / Integer / Float
let myNumber = 5;

// Text / String
// let myString = "this is my text";

// Boolean
let joeIsRich = false;
let joeIsRichInFriends = true;

// Array
let fruitsArray = ["apple", "orange", "pear"];

let fruitsLength = fruitsArray.length;

// console.log(fruitsLength);

let randomArray = [45, "lasdfld", true, ["one", "two"]];

// console.log(randomArray);

console.log(randomArray[3][1]);

// Objects
let userData = {
  name: "ldfjlsd",
  address: "123 ldflafj",
  tel: 4242342,
  hobbies: ["swimming", "walks on the beach"],
};

// Conditionals / logical AND && / logical OR ||

// if / else if / else

const isSunny = false;
const isRaining = false;
const isCold = false;
const isSnowing = false;

if (isSunny && isCold) {
  console.log("wear shorts and take a jacket");
} else if (isRaining || isSnowing) {
  console.log("take an umbrella");
} else if (isCold) {
  console.log("take a jacket");
} else {
  console.log("none of the above conditions were met");
}

// Ternary

let age = 18;
const canDrink = age >= 18 ? "can drink" : "can't drink";

console.log(canDrink);

// Chaining ternary

// const canDrink =
//   age >= 18
//     ? age === 18
//       ? "you can just about drink"
//       : "can drink"
//     : "can't drink";

// console.log(canDrink);

// testing == vs ===

// let myBoolean = true;
// let myString = "1";
// console.log(typeof myBoolean);
// console.log(typeof myString);

// if (myString == myBoolean) {
//   console.log("they're the same!");
// }
