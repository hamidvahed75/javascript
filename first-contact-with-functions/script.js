/**
 * 01) Greet function
 */

// TODO: implement welcomeMsg function

// Welcome Jane!
function welcomeJane() {
  return "Welcome" + " Jane";
}

console.log(welcomeJane());

// Welcome Marc!
function welcomeMarc() {
  return "Welcome" + " Marc";
}

console.log(welcomeMarc());

/**
 * 02) Gross Price Function
 */

// TODO: implement calcGrossPrice function

// console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

function calcGrossPrice(a, b) {
  return (a + a * b) / 100;
}

console.log(calcGrossPrice(20, 0.19) * 100);

// console.log(calcGrossPrice(40, 0.16));
// result should be 46.4

function calcGrossPrice(a, b) {
  return (a + a * b) / 100;
}

console.log(calcGrossPrice(40, 0.16) * 100);

/**
 * 03) Add Positive Function
 */

// TODO: Implement the addPositive function

// console.log(addPositive(2, 3));
// result1 should be 5

function addPositive(a, b) {
  return a + b;
}

console.log(addPositive(2, 3));

// console.log(addPositive(3, -5));
// result2 should be 8

function addPositive(a, b) {
  return a + b;
}

console.log(addPositive(3, -5 * -1));

// console.log(addPositive(-1, -8));
// result2 should be 9

function addPositive(a, b) {
  return Math.abs(a + b);
}

console.log(addPositive(-1, -8));
