class MoviesService {
  constructor($http, API) {
    'ngInject';
    this.$http = $http;
    this.API = API;
  }

  /**
   * Retrieves all existing movies from back-end
   * @returns {Promise} an array of movies
   */
  getMovies() {
    return this.$http.get(`${this.API}/films`)
      .then(response => {
        const moviesData = response.data;

        return moviesData;
      })
      .catch(error => {
        console.log('Error while getting data: ', error);
      });
  }
}

export default MoviesService;
