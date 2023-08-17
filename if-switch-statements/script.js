/**
 * Spot the errors and fix them
 */
const size = 25;
let result;

if (size < 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

console.log("-".repeat(30));

/**
 * oddEven-Funktion
 */

// TODO: Implement the oddEven function

// Convert the number to a string
function oddEven(value) {
  if (("" + value / 2)[("" + value / 2).length - 2] == ".") {
    // console.log("Value is odd");
    return "odd";
  } else {
    // console.log("Value ist even");
    return "even";
  }
}

console.log(oddEven(4));
// // result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

console.log("-".repeat(30));

/**
 * oldYoung-Funktion
 */

// TODO: Implement the oldYoung function

function oldYoung(value) {
  if (value < 0) {
    return "Invalid person";
  } else if (value < 16) {
    return "Child";
  } else if (value < 50) {
    return "Young person";
  } else if (value > 50) {
    return "Elder person";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
