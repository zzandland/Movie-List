const toggleVisibility = (movie) => {
  return {
    type: 'TOGGLE_VISIBILITY',
    movie: movie
  }
}

export default toggleVisibility;
