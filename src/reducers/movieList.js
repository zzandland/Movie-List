import Redux from 'redux';

const movieListReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      const newMovieObj = {
        title: action.movie,
        search: true,
        watched: false
      }
      const newMovieList = [...state.slice(), newMovieObj];
      return newMovieList;

    case 'SEARCH_MOVIE':
      const searchList = state.slice()
      for (let movie of searchList) {
        if (movie.title.toLowerCase().includes(action.keyword)) {
          movie.search = true;
        } else {
          movie.search = false;
        }
      }
      return searchList;

    case 'TOGGLE_WATCHED':
      const targetMovieIndex = state.slice().map(movie => movie.title).indexOf(action.movie);
      const targetMovie = state.slice()[targetMovieIndex];
      const toggledMovie = {
        title: targetMovie.title,
        search: targetMovie.search,
        watched: !targetMovie.watched
      }
      const updatedMovieList = state.slice();
      updatedMovieList.splice(targetMovieIndex, 1, toggledMovie);
      return updatedMovieList;

    default:
      return state;
  }
}

export default movieListReducer;
