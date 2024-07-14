// Variables for multiplication
let num1 = 2;
let num2 = 31;

// 1. Multiply num1 and num2
let multiply = num1 * num2; // The result should be 62

// 2. Generate a random integer greater than 0
let random = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100

// Variables for modulus operation
let num3 = 16;
let num4 = 6;

// 3. Calculate the remainder of dividing num3 by num4
let mod = num3 % num4; // The remainder should be 4

// 4. Find the highest number in a set
let max = Math.max(1, 2, 3, 20); // The highest number should be 20

// Export the variables for testing
module.exports = { multiply, random, mod, max };

