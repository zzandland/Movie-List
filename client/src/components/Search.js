import React, { Component } from 'react';

class Search extends Component {

  searchMovie() {
    let searchMovieInput = document.querySelector('#textInput');
    this.props.searchList(searchMovieInput.value.toLowerCase());
  }

  submitSearch(query) {
    this.props.searchList(query);
  }
  
  render() {
    return (
      <div id="search">
        <input   
          onChange={this.searchMovie.bind(this)}
          placeholder="Search..."
          id="textInput"         
          type="text">
        </input>
        <input 
          onClick={this.searchMovie.bind(this)}
          className="submit"
          type="submit"          
          value="Go!">       
        </input>
      </div>
    )
  }

}

export default Search;
