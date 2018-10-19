import Redux from 'redux';

const movieListReducer = (
  state = [], action
) => {
  switch (action.type) {

    case 'UPDATE_MOVIE_LIST':
      return action.movies.map(movieObj => {
        return Object.assign({}, movieObj, {
          search: true,
          visibility: false
        })
      })

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
      let watchedMovie = Object.assign({}, action.movie, {
        watched: !action.movie.watched
      });
      let updatedListWithWatched = state.slice();
      updatedListWithWatched.splice(state.length - action.movie.id, 1, watchedMovie);
      return updatedListWithWatched;

    case 'TOGGLE_VISIBILITY':
      let detailedMovie = Object.assign({}, action.movie, {
        visibility: !action.movie.visibility
      });
      let updatedListWithDetail = state.slice();
      updatedListWithDetail.splice(state.length - action.movie.id, 1, detailedMovie);
      return updatedListWithDetail;

    default:
      return state;
      
  }
}

export default movieListReducer;
