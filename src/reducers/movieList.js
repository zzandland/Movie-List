import Redux from 'redux';

const movieListReducer = (state=[{ title: 'Star Wars', year: 1977, runtime: 125, metascore: 90, imdbRating: 8.7, watched: false, visibility: false}], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      const newMovieObj = {
        title: action.movie,
        year: targetMovie.year,
        runtime: undefined,
        metascore: undefined,
        imdbRating: undefined,
        search: true,
        watched: false,
        visibility: false
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
      let targetMovieIndex = state.slice().map(movie => movie.title).indexOf(action.movie);
      let targetMovie = state.slice()[targetMovieIndex];
      let toggledMovie = {
        title: targetMovie.title,
        year: targetMovie.year,
        runtime: targetMovie.runtime,
        metascore: targetMovie.metascore,
        imdbRating: targetMovie.imdbRating,
        search: targetMovie.search,
        watched: !targetMovie.watched,
        visibility: targetMovie.visibility
      }
      let updatedMovieList = state.slice();
      updatedMovieList.splice(targetMovieIndex, 1, toggledMovie);
      return updatedMovieList;

    case 'TOGGLE_VISIBILITY':
      targetMovieIndex = state.slice().map(movie => movie.title).indexOf(action.movie);
      targetMovie = state.slice()[targetMovieIndex];
      toggledMovie = {
        title: targetMovie.title,
        year: targetMovie.year,
        runtime: targetMovie.runtime,
        metascore: targetMovie.metascore,
        imdbRating: targetMovie.imdbRating,
        search: targetMovie.search,
        watched: targetMovie.watched,
        visibility: !targetMovie.visibility
      }
      updatedMovieList = state.slice();
      updatedMovieList.splice(targetMovieIndex, 1, toggledMovie);
      return updatedMovieList;

    default:
      return state;
  }
}

export default movieListReducer;
