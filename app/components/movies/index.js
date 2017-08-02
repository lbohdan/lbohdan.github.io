import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MoviesComponent from './movies.component';
import MoviesService from './movies.service';
import MovieItem from './movie-item';
import MovieDetails from './movie-details';

const movies = angular
  .module('movies', [
    uiRouter,
    MovieItem,
    MovieDetails
  ])
  .component('movies', MoviesComponent)
  .service('MoviesService', MoviesService)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('movies', {
        url: '/movies',
        component: 'movies',
        resolve: {
          movies: MoviesService => MoviesService.getMovies()
        }
      });
    $urlRouterProvider.otherwise('/movies');
  })
  .name;

export default movies;

