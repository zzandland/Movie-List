import { connect } from 'react-redux';
import MovieList from './../components/MovieList.js';
import fetchMovies from '../actions/fetchMovies.js';

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList,
    sortStatus: state.sortList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovies: () => {
      dispatch(fetchMovies());
    }
  }
}

const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);

export default MovieListContainer;
