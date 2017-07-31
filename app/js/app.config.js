(function () {
  'use strict';

  angular.module('animeMovies')
    .config(config);

  function config($locationProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('https://ghibliapi.herokuapp.com');
  }
}());
