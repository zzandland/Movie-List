import fetch from 'cross-fetch';

const updateMovieList = () => {
  return {
    type: 'UPDATE_MOVIE_LIST'
  }
}

const fetchMovies = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/movies/api')
      .then((results) => {
        console.log(results);
      })
  }
} 
