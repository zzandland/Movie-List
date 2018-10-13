import React, { Component } from 'react';

class NewMovie extends Component {

  addMovieOnClick() {
    let newMovieInput = document.querySelector('#newMovieInput');
    if (newMovieInput.value !== '') {
      this.props.addMovie(newMovieInput.value);
    }
    newMovieInput.value = '';
  }

  addMovieOnEnter(event) {
    if (event.key === 'Enter') {
      let newMovieInput = document.querySelector('#newMovieInput');
      if (newMovieInput.value !== '') {
        this.props.addMovie(newMovieInput.value);
      }
      newMovieInput.value = '';
    }
  }

  render() {
    return (
      <div id="newMovie">
        <input 
          onKeyPress={this.addMovieOnEnter.bind(this)}
          id="newMovieInput"
          placeholder="Add movie title here"
          type="text">        
        </input>
        <input 
          onClick={this.addMovieOnClick.bind(this)}
          type="submit" 
          className="active submit" 
          value="Add">
        </input>
      </div>
    )
  }

}

export default NewMovie;
