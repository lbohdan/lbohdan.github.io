class MovieItemController {
  constructor(EventEmitter) {
    'ngInject';
    this.EventEmitter = EventEmitter;
  }

  //
  // Public methods
  //

  /**
   * Handles click on item with calling callback function
   */
  handleMovieClick() {
    this.onMovieSelectCallback(
      this.EventEmitter(
        {selectedMovieId: this.movieItem.id}
        )
    );
  }
}

export default MovieItemController;
