const movie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    star: {
      name: "Puff",
      country: "Uganda",
      age: 45
    }
  };
  
  function logMovieInfo(movie) {
    console.log(`${movie.title} lasts for ${movie.duration} minutes.`);
    console.log(`Star: ${movie.star.name} is ${movie.star.age} years old, born in ${movie.star.country}.`);
  }
  
  // Example usage
  logMovieInfo(movie);