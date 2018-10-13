const searchMovieList = (keyword) => {
  return {
    type: 'SEARCH_MOVIE',
    keyword: keyword
  }
}

export default searchMovieList;
