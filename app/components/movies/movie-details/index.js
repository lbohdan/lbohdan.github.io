import angular from 'angular';
import movieDetailsComponent from './movie-details.component';

const movieDetails = angular
  .module('movie.details', [])
  .component('movieDetails', movieDetailsComponent)
  .name;

export default movieDetails;
