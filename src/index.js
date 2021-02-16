console.log("AJAX is awesome!");

const moviesList = document.querySelector('#movies');

const searchMovies = (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {
      const movieItem = `<li class="list-inline-item">
        <img src="${movie.Poster}" alt="">
        <p>${movie.Title}</p>
      </li>`

      moviesList.insertAdjacentHTML('beforeend', movieItem);

    });
  });
}


const searchForm = document.querySelector('#search');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#search-input');
  const keyword = input.value;
  moviesList.innerHTML = "";

  searchMovies(keyword);
});



searchMovies("harry potter");


































