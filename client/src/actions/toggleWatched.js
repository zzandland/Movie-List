import fetchMovies from './fetchMovies.js';

const toggleWatched = (movie) => {
  return (dispatch) => {
    return fetch('http://localhost:3000/movies/api', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(movie)
    })
      .then(response => {
        console.log(response);
        dispatch(fetchMovies()); 
      })
  }
}

export default toggleWatched;
