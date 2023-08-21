/**
 * removeItem function
 */

// TODO: Implement the removeItem function

function removeItem(theArray, indexOfItemToBeRemoved) {
  const result = theArray.slice();
  // console.log(`The result is:  ${result}`);

  result.splice(indexOfItemToBeRemoved, 1);

  return result;
}
const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

console.log("-".repeat("30"));
/**
 * sumOfCharacters function
 */

// TODO: Implement the sumOfCharacters function

function sumOfCharacters(theArray) {
  let result = 0;

  for (let i = 0; i < theArray.length; i++) {
    // 1
    const element = theArray[i];
    if (typeof element === "string") {
      result = result + element.length;
    }
  }

  return result;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
