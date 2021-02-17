const moviesList = document.querySelector('#movies');

const insertMovies = (data) => {
  // insert movies
  data.Search.forEach((movie) => {
    const movieItem = `<li class="list-inline-item">
      <img src="${movie.Poster}" alt="">
    </li>`

    moviesList.insertAdjacentHTML('beforeend', movieItem);
  });
}

const searchMovies = (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`
  fetch(url)
  .then(response => response.json())
  .then(insertMovies);
}
const updateMoviesList = (event) => {
  // update movies list
  event.preventDefault();
  const input = document.querySelector('#search-input');
  const keyword = input.value;
  moviesList.innerHTML = "";

  searchMovies(keyword);
}

export { updateMoviesList, searchMovies };
