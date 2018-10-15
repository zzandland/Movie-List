import { connect } from 'react-redux';
import MovieList from './../components/MovieList.js';

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
    sortStatus: state.sortList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleWatched: movie => {
      dispatch(toggleWatched(movie));
    }
  }
}

const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListContainer;
