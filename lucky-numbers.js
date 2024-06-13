/**
 * Write a function twoSum that accepts two arrays as parameters. 
 * Each array consists of one or more numbers between 0 and 9. 
 * The function should interpret each array as a number and return the sum of those two numbers.
 */

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    let firstArray = array1.join("");
    console.log(firstArray);
    let secondArray = array2.join("");
    console.log(secondArray);
    let sum = Number(firstArray) + Number(secondArray)
    console.log(sum);
    return sum;
  }