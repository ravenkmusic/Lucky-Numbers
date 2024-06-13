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
  
  /**
   * Checks whether a number is a palindrome.
   *
   * @param {number} value
   * @returns {boolean} whether the number is a palindrome or not
   */
  export function luckyNumber(value) {
    let stringValue = String(value);
    let valueArray = stringValue.split([]);
    let reversedArray = valueArray.reverse();
    let luckyNumber = reversedArray.join("");
  
    if (luckyNumber === stringValue){
      return true;
    } else {
      return false;
    }
  }
  
  /**
   * Determines the error message that should be shown to the user
   * for the given input value.
   *
   * @param {string|null|undefined} input
   * @returns {string} error message
   */