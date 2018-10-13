const toggleWatched = (movie) => {
  return {
    type: 'TOGGLE_WATCHED',
    movie: movie
  }
}

export default toggleWatched;
