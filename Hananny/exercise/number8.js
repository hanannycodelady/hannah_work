function getFirstNElements(array, n) {
    if (n > array.length) {
      console.log("The value of n is greater than the length of the array.");
      return;
    }
    return array.slice(0, n);
  }
  
  // Example usage:
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(getFirstNElements(arr, 3));