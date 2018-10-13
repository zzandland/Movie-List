import { connect } from 'react-redux';
import Movie from '../components/Movie.js';
import toggleWatched from '../actions/toggleWatched.js';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleWatched: movie => {
      dispatch(toggleWatched(movie));
    }
  }
}

const MovieContainer = connect(
  null,
  mapDispatchToProps
)(Movie);

export default MovieContainer;
