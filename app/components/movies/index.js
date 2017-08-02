import angular from 'angular';
import uiRouter from 'angular-ui-router';
import MoviesComponent from './movies.component';
import MoviesService from './movies.service';
import MoviesList from './movies-list';

const movies = angular
  .module('movies', [
    uiRouter,
    MoviesList
  ])
  .component('movies', MoviesComponent)
  .service('MoviesService', MoviesService)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('movies', {
        url: '/movies',
        component: 'movies',
        resolve: {
          moviesData: MoviesService => MoviesService.getMovies()
        }
      })
    $urlRouterProvider.otherwise('/');
  })
  .name;

export default movies;

