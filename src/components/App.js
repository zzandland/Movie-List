import React from 'react';
import NewMovieContainer from './../containers/NewMovieContainer.js';
import WatchedContainer from './../containers/WatchedContainer.js';
import SearchContainer from './../containers/SearchContainer.js';
import MovieListContainer from './../containers/MovieListContainer.js';

const App = () => (
  <div className="app">
    <div id="title">
      <h2>MovieList</h2>
    </div>
    <NewMovieContainer />
    <div id="topbar">
      <WatchedContainer />
      <SearchContainer />
    </div>
    <MovieListContainer />
  </div>
)

export default App;
