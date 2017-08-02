import orderBy from 'lodash.orderby';

class MoviesController {
  constructor($scope, ngDialog) {
    'ngInject';
    this.$scope = $scope;
    this.ngDialog = ngDialog;
  }

  //
  // Hook methods
  //

  /**
   * Initialization method
   */
  onInit() {
    this.isReverseSorting = false;
    this.sortedColumnName = 'title';
    this.sortTableByColumn(this.sortedColumnName, this.isReverseSorting);
  }

  //
  // Public methods
  //

  /**
   * Checks whether the passed column name equals the last sorted column name
   * @param {string} columnName
   * @return {{sorted: boolean, reversed: boolean}} - an object with css class names suitable for `ng-class`
   */
  isColumnSorted(columnName) {
    const classes = {
      'sorted': false,
      'reversed': false
    };
    if (columnName === this.sortedColumnName) {
      classes.sorted = true;
      classes.reversed = this.isReverseSorting;
    }
    return classes;
  }

  /**
   * Sorts the table by column name
   * @param {string} columnName - name of column
   * @param {boolean} isJustSorting - if it is needed just to sort data without changing reverse
   */
  sortTableByColumn(columnName, isJustSorting) {
    if (!isJustSorting) {

      // changes the order of sorting the column
      this.isReverseSorting = (columnName === this.sortedColumnName) ? !this.isReverseSorting : false;
    }

    // saves the name of sorted column
    this.sortedColumnName = columnName;
    this.movies = orderBy(this.movies, this.sortedColumnName, this.isReverseSorting ? 'asc' : 'desc');
  }

  /**
   * Opens popup window with movie details
   * @param {string} selectedMovieId
   */
  selectMovie({selectedMovieId}) {
    const selectedMovie = this.movies.find(item => item.id === selectedMovieId);

    this.ngDialog.open({
      template: '<movie-details data-movie-details="ngDialogData.selectedMovie" class="movie-details-popup"></movie-details>',
      plain: true,
      scope: this.$scope,
      data: {
        selectedMovie: selectedMovie
      },
      className: 'ngdialog-theme-default ngdialog-theme-am'
    });
  }
}

export default MoviesController;
