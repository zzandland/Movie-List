import React, { Component } from 'react';
import Movie from './Movie.js';
import MovieContainer from '../containers/MovieContainer.js';

class MovieList extends Component {

  componentWillMount() {
    this.props.fetchMovies();
  }
  
  checkSearchListLength() {
    if (this.props.sortStatus === 'watched') {
      return this.props.movieList.filter(movie => {
        return (movie.search && movie.watched); 
      }).length === 0;
    } else if (this.props.sortStatus === 'toWatch') {
      return this.props.movieList.filter(movie => {
        return (movie.search && !movie.watched); 
      }).length === 0;
    } else {
      return this.props.movieList.filter(movie => {
        return (movie.search); 
      }).length === 0;
    }
  }

  render() {
    if (this.checkSearchListLength()) {
      return (
        <div id="result-negative">no movie by that name found</div>
      )
    } else {
      if (this.props.sortStatus === 'watched') {
        return (
          <div id="list">
            <ul>
              {
                this.props.movieList.filter(movie => {
                  return (movie.search && movie.watched); 
                }).map(movie => {
                  return <MovieContainer movie={movie}/>
                })
              }
            </ul> 
          </div>
        )
      } else if (this.props.sortStatus === 'toWatch') {
        return (
          <div id="list">
            <ul>
              {
                this.props.movieList.filter(movie => {
                  return (movie.search && !movie.watched); 
                }).map(movie => {
                  return <MovieContainer movie={movie}/>
                })
              }
            </ul> 
          </div>
        )
      } else if (this.props.sortStatus === 'all') {
        return (
          <div id="list">
            <ul>
              {
                this.props.movieList.filter(movie => {
                  return (movie.search); 
                }).map(movie => {
                  return <MovieContainer movie={movie}/>
                })
              }
            </ul> 
          </div>
        )
      }
    }
  }

}

export default MovieList;
