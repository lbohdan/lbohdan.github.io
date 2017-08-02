import controller from './movie-item.controller';
import template from './movie-item.html';

const MovieItemComponent = {
  bindings: {
    movieItem: '<',
    onMovieSelectCallback: '&'
  },
  controller,
  template
};

export default MovieItemComponent;
