import React, { Component } from 'react';

class Watched extends Component {

  activateWatched() {
    if (this.props.sortStatus !== 'watched') {
      this.props.sortList('watched');
    } else {
      this.props.sortList('all');
    }
    const watchedButton = document.querySelector('#watchedOnly');  
    const toWatchButton = document.querySelector('#toWatchOnly');
    watchedButton.classList.toggle('active')
    toWatchButton.classList.remove('active');
  }

  activateToWatch() {
    if (this.props.sortStatus !== 'toWatch') {
      this.props.sortList('toWatch');
    } else {
      this.props.sortList('all');
    }
    const watchedButton = document.querySelector('#watchedOnly');
    const toWatchButton = document.querySelector('#toWatchOnly');
    watchedButton.classList.remove('active')
    toWatchButton.classList.toggle('active');
  }

  render() {
    return (
      <div>
        <button
          id="watchedOnly"
          onClick={this.activateWatched.bind(this)}>
          Watched
        </button>
        <button
          id="toWatchOnly"
          onClick={this.activateToWatch.bind(this)}>
          To Watch
        </button>
      </div>
    )
  }

}

export default Watched;
