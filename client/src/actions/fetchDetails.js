import fetch from 'cross-fetch';
import addMovie from './movieList.js';

const requestDetails = () => {
  return {
    type: 'REQUEST_DETAILS',
  } 
}

const receiveDetails = () => {
  return {
    type: 'RECEIVE_DETAILS',
    receivedAt: Date.now()
  }
}

const fetchDetails = (movie) => {
  return (dispatch) => {
    dispatch(requestDetails()) 
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${movie}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(addMovie(json.results));
        dispatch(receiveDetails());
      })
  }
}

export default fetchDetails;
