import { connect } from 'react-redux';
import Search from '../components/Search.js';
import searchMovieList from '../actions/searchMovieList.js';

const mapStateToProps = (state) => {
  return {
    movieList: state.movieList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchList: keyword => {
      dispatch(searchMovieList(keyword));
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
