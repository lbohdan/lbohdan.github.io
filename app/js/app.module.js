import angular from 'angular';
import uiRouter from 'angular-ui-router';
(function () {
  'use strict';

  angular.module('animeMovies', [
    'ui.router',
    'ngLodash',
    'ngDialog',
    'restangular',
    'picardy.fontawesome'
  ]);
}());
