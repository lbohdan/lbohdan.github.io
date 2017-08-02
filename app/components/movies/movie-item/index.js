import angular from 'angular';
import movieItemComponent from './movie-item.component';

const movieItem = angular
  .module('movie.item', [])
  .component('movieItem', movieItemComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;

export default movieItem;
