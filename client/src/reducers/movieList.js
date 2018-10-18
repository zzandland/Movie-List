import Redux from 'redux';

const movieListReducer = (
  state = [], action
) => {
  switch (action.type) {

    case 'ADD_MOVIE':
      const retrievedInfo = action.movie[0];
      const newMovieObj = {
        title: retrievedInfo.title,
        year: parseInt(retrievedInfo.release_date.slice(0, 4)),
        rating: retrievedInfo.vote_average,
        overview: retrievedInfo.overview,
        image: `https://image.tmdb.org/t/p/w200/${retrievedInfo.poster_path}`,
        search: true,
        watched: false,
        visibility: false
      }
      const newMovieList = [...state.slice(), newMovieObj];
      return newMovieList;

    case 'UPDATE_MOVIE':
      return state;


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
      let toggledMovie = Object.assign({}, targetMovie, {
        watched: !targetMovie.watched
      });
      let updatedMovieList = state.slice();
      updatedMovieList.splice(targetMovieIndex, 1, toggledMovie);
      return updatedMovieList;

    case 'TOGGLE_VISIBILITY':
      targetMovieIndex = state.slice().map(movie => movie.title).indexOf(action.movie);
      targetMovie = state.slice()[targetMovieIndex];
      toggledMovie = Object.assign({}, targetMovie, {
        visibility: !targetMovie.visibility
      });
      updatedMovieList = state.slice();
      updatedMovieList.splice(targetMovieIndex, 1, toggledMovie);
      return updatedMovieList;

    default:
      return state;
  }
}

export default movieListReducer;
