const updateMovieList = (movies) => {
  return {
    type: 'UPDATE_MOVIE_LIST',
    movies: movies
  }
}

const fetchMovies = () => {
  return (dispatch) => {
    return fetch('http://localhost:3000/movies/api')
      .then((result) => {
        return result.json();
      })
      .then((movies) => {
        dispatch(updateMovieList(movies));
      })
  }
} 

export default fetchMovies;
