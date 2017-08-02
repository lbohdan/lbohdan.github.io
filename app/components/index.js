import angular from 'angular';
import Movies from './movies';

const components = angular
  .module('app.components', [
    Movies
  ])
  .name;

export default components;
