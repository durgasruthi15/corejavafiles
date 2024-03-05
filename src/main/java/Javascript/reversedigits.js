function reverseNumber(number) {
    // Convert the number to a string, split it into an array of characters, reverse the array, join it back into a string, and then convert it to a number
    const reversedNumber = parseInt(number.toString().split('').reverse().join(''));
    return reversedNumber;
}

// Test the function with the given input
const inputNumber = 12345;
const outputNumber = reverseNumber(inputNumber);
console.log(outputNumber);