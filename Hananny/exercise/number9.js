function swapCase(str) {
    return str.split('').map(function(char) {
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    }).join('');
  }
  
  console.log(swapCase("gEeksFoRgEeks"));