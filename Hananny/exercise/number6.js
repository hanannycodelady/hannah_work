function isArrayCheck(variable) {
    if (Array.isArray(variable)) {
      console.log("Is Array");
    } else {
      console.log("Not Array");
    }
  }
  
  // Test the function with an array
  isArrayCheck([1, 2, 3]); // Logs: Is Array
  
  // Test the function with a non-array
  isArrayCheck({name: "Jane", age: 24}); // Logs: Not Array