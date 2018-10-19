import fetchMovies from './fetchMovies.js';

const saveMovie = (movies) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/movies/api', {
      method: 'POST',
      body: movies
    })
      .then((result) => {
        dispatch(fetchMovies());
      })
  }
}

export default saveMovie;
