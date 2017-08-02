import controller from './movies.controller';
import template from './movies.html';

const MoviesComponent = {
  bindings: {
    movies: '<'
  },
  controller,
  template
};

export default MoviesComponent;
