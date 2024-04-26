function capitalizeFirstLetterOfEachWord(str) {
    return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
  
  // Test the function with a sample string
  const sampleString = "hello world! this is a test.";
  console.log(capitalizeFirstLetterOfEachWord(sampleString));
  // Output: "Hello World! This Is A Test."