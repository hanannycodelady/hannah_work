function differenceFrom13(number) {
    const difference = Math.abs(number - 13);
    
    if (number > 13) {
        return difference * 2;
    } else {
        return difference;
    }
}

// Example usage:
const number = 20;
const result = differenceFrom13(number);
console.log("The difference between " + number + " and 13 is " + result + ".");
