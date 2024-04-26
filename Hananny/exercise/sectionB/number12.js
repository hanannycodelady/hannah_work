function reverseWord(word) {
    return word.split('').reverse().join('');
  }
  
  const inputWord = "Hello";
  const reversedWord = reverseWord(inputWord);
  console.log(`Original word: ${inputWord}`);
  console.log(`Reversed word: ${reversedWord}`);