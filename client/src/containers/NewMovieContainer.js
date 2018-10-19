import { connect } from 'react-redux';
import NewMovie from '../components/NewMovie.js';
import fetchDetails from '../actions/fetchDetails.js';
import saveMovie from '../actions/movieList.js';

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveMovie: movie => {
      dispatch(saveMovie(movie));
    }
  }
}

const NewMovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMovie);

export default NewMovieContainer;
