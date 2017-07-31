(function () {
  'use strict';

  angular.module('animeMovies')
    .component('amMovieItem', {
      bindings: {
        movieItem: '<',
        onMovieSelectCallback: '&'
      },
      templateUrl: 'js/components/movies/movie-item/movie-item.tpl.html',
      controller: AmMovieItemController
    });

  function AmMovieItemController($scope) {
    const ctrl = this;

    ctrl.handleMovieClick = handleMovieClick;

    function handleMovieClick() {
      ctrl.onMovieSelectCallback({selectedMovieId: ctrl.movieItem.id});
    }
  }
}());
