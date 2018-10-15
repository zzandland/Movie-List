import { connect } from 'react-redux';
import NewMovie from '../components/NewMovie.js';
import fetchDetails from '../actions/fetchDetails.js';

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetails: movie => {
      dispatch(fetchDetails(movie));
    }
  }
}

const NewMovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMovie);

export default NewMovieContainer;
