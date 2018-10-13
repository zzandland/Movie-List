import React, { Component } from 'react';

class Movie extends Component {

  constructor(props) {
    super(props); 
  }

  toggleWatched() {
    const movieTitle = this.props.movie.title;
    this.props.toggleWatched(movieTitle);
  }

  render() {
    if(this.props.movie.watched) {
      return (
        <li className="movie">
          {this.props.movie.title}
          <button
            onClick={this.toggleWatched.bind(this)}>
            Watched
          </button>
        </li>
      )
    } else {
      return (
        <li>
          {this.props.movie.title}
          <button
            id="unwatched-button"
            onClick={this.toggleWatched.bind(this)}>
            To Watch
          </button>
        </li>
      )
    }
  }

}

export default Movie;
