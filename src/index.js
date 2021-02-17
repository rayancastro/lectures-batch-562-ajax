// Import functions
import { updateMoviesList, searchMovies } from './movies';
import { initSortable } from './init_sortable';
import { initMarkdown } from './init_markdown';
import { initSelect2 } from './init_select2';

// Call functions
searchMovies("harry potter");
initSortable();
initMarkdown();
initSelect2();

// Add event listeners
const searchForm = document.querySelector('#search');
searchForm.addEventListener('submit', updateMoviesList);



