import React, { Component } from 'react';

const Movie = (props) => {

    if (!props.movie.visibility) {
      return (
        <li className="movie">
          {props.movie.title}
          <button
            className="active"
            onClick={() => { props.toggleVisibility(props.movie) }}>
            More
          </button>
        </li>
      )
    } else {
      return (
        <div>
          <li className="movie active">
            {props.movie.title}
            <button
              onClick={() => { props.toggleVisibility(props.movie) }}>
              Close
            </button>
          </li>
          <div className="movie-detailbox">
            <div className="movie-information">
              <p><strong>Year</strong>: {props.movie.year}</p>
              <p><strong>Rating</strong>: {props.movie.rating}</p>
              <p><strong>Overview</strong>: {props.movie.overview}</p>
              { !props.movie.watched &&
                <div>
                  <span><strong>Watched</strong>: </span>
                  <input
                  type="radio"
                  onChange={() => { props.toggleWatched(props.movie) }}
                  ></input>
                </div>
              }
            </div>
            <div className="movie-image">
              <img src={props.movie.image} />
            </div>
          </div>
        </div>
      )
    }

}

export default Movie;
