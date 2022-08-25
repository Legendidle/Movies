let normalizedMovies = [];

let elList = $(".js-movie-list");
let elMovieTemplate = $("#template-element").content;

let createMovieElement = (movie) => {
  let elNewElement = elMovieTemplate.cloneNode(true);

  elNewElement.querySelector(".card-img").src = `http://i3.ytimg.com/vi/${movie.ytid}/hqdefault.jpg`;
  elNewElement.querySelector(".card-img").alt = movie.title;

  elNewElement.querySelector(".card-title").textContent = movie.Title;
  elNewElement.querySelector(".card-full-title").textContent = movie.fulltitle.split(" ").splice(0,5).join(" ");
  elNewElement.querySelector(".card-movie-year").textContent = movie.movie_year;
  elNewElement.querySelector(".card-catigories").textContent = movie.Categories;
  elNewElement.querySelector(".card-text").textContent = movie.summary.split(" ").splice(0,30).join(" ");
  elNewElement.querySelector(".card-rating").textContent = movie.imdb_rating;
  elNewElement.querySelector(".card-ytid").textContent = "YouTube Link: " + movie.ytid;

  return elNewElement;
}

let renderMovie = (movies) => {
  elList.innerHTML = "";

  let elMovieWrapperFragment = document.createDocumentFragment();

  movies.forEach(movie => {
    elMovieWrapperFragment.appendChild(createMovieElement(movie));
    normalizedMovies.push({
      title: movie.Title,
      fullTitle: movie.fulltitle,
      categories: movie.Categories,
      summary: movie.summary,
      imageURL: movie.ImageURL,
      imdbId: movie.imdb_id,
      imdbRating: movie.imdb_rating,
      runtime: movie.runtime,
      language: movie.language,
      ytid: movie.ytid,
    });
  });
  elList.appendChild(elMovieWrapperFragment);
}

renderMovie(movies);
