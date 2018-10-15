import React, { Component } from 'react';

class Movie extends Component {

  toggleVisibility() {
    console.log(this.props.movie);
    const movieTitle = this.props.movie.title;
    this.props.toggleVisibility(movieTitle);
  }

  toggleWatched() {
    const movieTitle = this.props.movie.title;
    this.props.toggleWatched(movieTitle);
  }

  render() {
    if (!this.props.movie.visibility) {
      return (
        <li className="movie">
          {this.props.movie.title}
          <button
            className="active"
            onClick={this.toggleVisibility.bind(this)}>
            More
          </button>
        </li>
      )
    } else {
      return (
        <div>
          <li className="movie active">
            {this.props.movie.title}
            <button
              onClick={this.toggleVisibility.bind(this)}>
              Close
            </button>
          </li>
          <div className="movie-detailbox">
            <div className="movie-information">
              <p><strong>Year</strong>: {this.props.movie.year}</p>
              <p><strong>Rating</strong>: {this.props.movie.rating}</p>
              <p><strong>Overview</strong>: {this.props.movie.overview}</p>
              { !this.props.movie.watched &&
                <div>
                  <span><strong>Watched</strong>: </span>
                  <input
                  type="radio"
                  onChange={this.toggleWatched.bind(this)}
                  ></input>
                </div>
              }
            </div>
            <div className="movie-image">
              <img src={this.props.movie.image} />
            </div>
          </div>
        </div>
      )
    }
  }

}

export default Movie;
