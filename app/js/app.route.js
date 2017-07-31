(function () {
  'use strict';

  angular.module('animeMovies')
    .config(routes);

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        url: '/',
        template: '<am-main-wrapper class="am-main-wrapper am-row am-component"></am-main-wrapper>'
      })
      .state('app.movies', {
        url: 'movies',
        views: {
          content: {
            template: '<am-movies data-movies="$resolve.movies"></am-movies>'
          }
        },
        resolve: {
          movies: function (MoviesDataService) {
            return MoviesDataService.resolver();
          }
        }
      });

    $urlRouterProvider.otherwise('/movies');
  }
}());
