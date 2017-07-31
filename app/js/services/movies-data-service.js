(function () {
  'use strict';

  angular.module('animeMovies')
    .factory('MoviesDataService', MoviesDataService);

  function MoviesDataService(Restangular) {
    return {
      movies: getMovies,
      resolver: resolver
    };

    //
    // Public methods
    //

    /**
     * Retrieves all existing movies from back-end
     * @returns {Promise} an array of movies
     */
    function getMovies() {
      return Restangular.all('films').getList();
    }

    /**
     * Resolver for getting data from back-end
     */
    function resolver() {
      return getMovies()
        .then(movies => {
          const moviesData = movies.plain();

          return moviesData;
        })
        .catch(error => {
          console.log('Error while getting data: ', error);
        })

    }
  }
}());
