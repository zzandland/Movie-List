import { connect } from 'react-redux';
import Movie from '../components/Movie.js';
import toggleWatched from '../actions/toggleWatched.js';
import toggleVisibility from '../actions/toggleVisibility.js';

const mapDispatchToProps = (dispatch) => {
  return {
    toggleWatched: movie => {
      dispatch(toggleWatched(movie));
    },
    toggleVisibility: movie => {
      dispatch(toggleVisibility(movie)); 
    }
  }
}

const MovieContainer = connect(
  null,
  mapDispatchToProps
)(Movie);

export default MovieContainer;
