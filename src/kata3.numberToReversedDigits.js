const numberToReversedDigits = (number) => {
    const numberToString = number;
    const newString = numberToString.toString();
    const newArray = Array.from(newString);
    const reversedArray = newArray.reverse();
    const reversedArrayOfNumbers = reversedArray.map(Number);
    return reversedArrayOfNumbers;
};

module.exports = numberToReversedDigits;
