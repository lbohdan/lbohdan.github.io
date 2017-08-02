(function () {
  'use strict';

  angular.module('animeMovies')
    .component('amMovies', {
      bindings: {
        movies: '<'
      },
      templateUrl: 'js/components/movies/movies.tpl.html',
      controller: AmMoviesController
    });

  function AmMoviesController($scope, lodash, ngDialog) {
    const ctrl = this;

    ctrl.isReverseSorting = false;
    ctrl.sortedColumnName = 'title';

    ctrl.$onInit = onInit;
    ctrl.isColumnSorted = isColumnSorted;
    ctrl.selectMovie = selectMovie;
    ctrl.sortTableByColumn = sortTableByColumn;

    //
    // Hook methods
    //

    /**
     * Initialization method
     */
    function onInit() {
      ctrl.sortTableByColumn(ctrl.sortedColumnName, ctrl.isReverseSorting);
    }

    //
    // Public methods
    //

    /**
     * Checks whether the passed column name equals the last sorted column name
     * @param {string} columnName
     * @param {string} lastSortedColumnName
     * @param {boolean} isReversed
     * @return {{sorted: boolean, reversed: boolean}} - an object with css class names suitable for `ng-class`
     */
    function isColumnSorted(columnName, lastSortedColumnName, isReversed) {
      var classes = {
        'sorted': false,
        'reversed': false
      };
      if (columnName === lastSortedColumnName) {
        classes.sorted = true;
        classes.reversed = isReversed;
      }
      return classes;
    }

    /**
     * Sorts the table by column name
     * @param {string} columnName - name of column
     * @param {boolean} isJustSorting - if it is needed just to sort data without changing reverse
     */
    function sortTableByColumn(columnName, isJustSorting) {
      if (!isJustSorting) {

        // changes the order of sorting the column
        ctrl.isReverseSorting = (columnName === ctrl.sortedColumnName) ? !ctrl.isReverseSorting : false;
      }

      // saves the name of sorted column
      ctrl.sortedColumnName = columnName;
      ctrl.movies = lodash.orderBy(ctrl.movies, ctrl.sortedColumnName, ctrl.isReverseSorting ? 'asc' : 'desc');
    }

    /**
     * Opens popup window with movie details
     * @param {string} movieId
     */
    function selectMovie(movieId) {
      const selectedMovie = lodash.find(ctrl.movies, {'id': movieId});

      ngDialog.open({
        template: '<am-movie-item-details data-movie-details="ngDialogData.selectedMovie" class="am-movie-details-popup"></am-movie-item-details>',
        plain: true,
        scope: $scope,
        data: {
          selectedMovie: selectedMovie
        },
        className: 'ngdialog-theme-default ngdialog-theme-am'
      });
    }
  }
}());
