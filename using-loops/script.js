/**
 * oddNumbers function
 */
// TODO: Implement the oddNumbers function

const oddNumbers = (startNumber, endNumber) => {
  let result = "";

  for (let index = startNumber; index <= endNumber; index++) {
    if (index % 2 !== 0) {
      result += index;
    }
  }

  return result.replace("", ",");
};

console.log(oddNumbers(0, 4));
// // result should be: 1,3

console.log("-".repeat("30"));

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

/** ANCHOR ===> "Failer ???" */

// console.log(oddEven(9, 12));
// result should be: 9,11

console.log("-".repeat("30"));

/** ANCHOR  ===> change function name "oddEven to oddNumbers" */

console.log(oddNumbers(9, 12));
// result should be: 9,11

console.log("-".repeat("30"));

/**
 * charCount function
 */

// TODO: Implement the charCount function

const charCount = (wordIsString, searchCharIsString) => {
  let result;

  for (let index = 0; index < wordIsString.length; index++) {
    const char = wordIsString[index];
    if (wordIsString.indexOf(index) > -1) {
      return;
    } else if (char === searchCharIsString) {
      result = index;
      break;
    }
  }
  return result;
};

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
