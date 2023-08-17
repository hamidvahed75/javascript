/**
 * Create a new folder and prepare an index.html file that executes a script.js files.
 * 
 * const userName = Brad;
userName = "Jenna";

function getUserNameLength {
  return const result = name.length
}

console.log(getUserNameLength(userName) > 4)
 ^______________ Should log true

 */

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(username) {
  let result = userName.length;
  return result;
}

console.log(getUserNameLength(userName.length) > 4);
// ^______________ Should log true

console.log("-".repeat(30));
/**
 * 02) isString function
 */

// TODO: Implement the isString function

const isString = function (value) {
  return typeof value === "string";
};
console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
