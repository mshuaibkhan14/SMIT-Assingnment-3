
(async function () {
    const response = await fetch("./data.json");
    const data = await response.json();
  
    const movieList = document.getElementById("movie-list");
    const genreSelect = document.getElementById("genre-select");
    const ratingSelect = document.getElementById("rating-select");
    const yearSelect = document.getElementById("year-select");
    const btnElem = document.getElementById("showMovie");
  
    const filteredMovies = filterMovies(data);
    displayMovies(filteredMovies);
  
    function filterMovies(movies) {
      const genreValue = genreSelect.value;
      const ratingValue = ratingSelect.value;
      const yearValue = yearSelect.value;
      return movies.filter((movie) => {
        let match = true;
        if (genreValue && !movie.genres.includes(genreValue)) {
          match = false;
        }
        if (yearValue && !movie.release_date.includes(yearValue)) {
          match = false;
        }
        if (ratingValue) {
          const rating = Math.round(movie.vote_average);
          if (rating < parseInt(ratingValue)) {
            match = false;
          }
        }
        return match;
      });
    }
  
    function displayMovies(movies) {
      movieList.innerHTML = "";
      movies.forEach((movie) => {
        const movieItem = document.createElement("li");
  
        const title = document.createElement("h3");
        title.textContent = movie.title;
        movieItem.appendChild(title);
  
        const language = document.createElement("p");
        language.textContent = "Language: " + movie.original_language;
        movieItem.appendChild(language);
  
        const rating = document.createElement("p");
        rating.textContent = "Rating: " + movie.vote_average;
        movieItem.appendChild(rating);
  
        const runtime = document.createElement("p");
        runtime.textContent = "Runtime: " + movie.runtime + " mins";
        movieItem.appendChild(runtime);
  
        const certification = document.createElement("p");
        certification.textContent = "Certification: " + movie.certification;
        movieItem.appendChild(certification);
  
        movieList.appendChild(movieItem);
      });
    }
  
    btnElem.addEventListener("click", () => {
      const filteredMovies = filterMovies(data);
      displayMovies(filteredMovies);
    });
  })();
  