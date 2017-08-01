(function () {
  'use strict';

  angular.module('animeMovies')
    .component('amMovieItemDetails', {
      bindings: {
        movieDetails: '<'
      },
      templateUrl: 'js/components/movies/movie-item-details/movie-item-details.tpl.html',
      controller: MovieItemDetailsController
    });

  function MovieItemDetailsController() {
    const ctrl = this;
  }
}());
