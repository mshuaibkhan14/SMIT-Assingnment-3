// alert("SMIT");

(async function () {
    const response = await fetch("./data.json");
    const movies = await response.json();


    const btnEle = document.getElementById("showMovie")
    function serach() {
        const genreDropdown = document.getElementById("Genre");
        const selectedGenre = genreDropdown.value;
        // console.log(selectedGenre);
        const langDropdown = document.getElementById("Language");
        const selectedLang = langDropdown.value;
        // console.log(selectedLang);
        const yearDropdown = document.getElementById("yearDropdown");
        const selectedYear = yearDropdown.value;
        // console.log(selectedYear);

         const filteredMovies = movies.filter(function(movie) {
            return (
                movie.genres.toLowerCase().includes(genre) >=selectedGenre &&
                movie.original_language >= selectedLang &&
                movie.release_date.value >= selectedYear
                
            );
            

        });
        btnEle.addEventListener("click", serach)

        const recommendationsDiv = document.getElementById("recommendations");
          recommendationsDiv.innerHTML = "";
      if (filteredMovies.length === 0) {
        recommendationsDiv.innerHTML = "No movies found";
      } else {
        filteredMovies.forEach(movie => {
          const movieDiv = document.createElement("div");
          movieDiv.innerHTML = `${movie.title} (${movie.year}) - ${movie.genre} - ${movie.rating}`;
          recommendationsDiv.appendChild(movieDiv);
        });
      }
    
    

}



    console.log(movies);
})();






 
    

