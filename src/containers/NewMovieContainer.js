import { connect } from 'react-redux';
import NewMovie from '../components/NewMovie.js';
import addMovie from '../actions/movieList.js';

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: movie => {
      dispatch(addMovie(movie)); 
    }
  }
}

const NewMovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMovie);

export default NewMovieContainer;
