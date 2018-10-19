const TMDB_API_KEY = require('./config/tmdb.js');

const express = require('express');
const path = require('path');
const app = express();

// Middleware
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.text());
const fetch = require('node-fetch');

// mysql setup
const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: 'ye',
  database: 'movie'
});

connection.connect();

// Serving react client files
app.use(express.static(path.join(__dirname, '../client/dist')));

// get movielist from database
app.get('/movies/api', (req, res) => {
  let queryStr = 'SELECT * FROM movielist ORDER BY movielist.id DESC';
  connection.query(queryStr, (err, results) => {
    res.json(results);
  })
})

// get queryString from client
app.post('/movies/api', (req, res) => {
  let movieQuery = req.body;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${movieQuery}`;
  fetch(url)
    .then(response => response.json())
    .then(json => {
      const newMovieObj = {
        title: json.results[0].title,
        year: parseInt(json.results[0].release_date.slice(0, 4)),
        rating: json.results[0].vote_average,
        overview: json.results[0].overview,
        image: `https://image.tmdb.org/t/p/w200/${json.results[0].poster_path}`,
        watched: false
      }
      return newMovieObj;
    })
    .then(movieObj => {
      let params = [movieObj.title, movieObj.year, movieObj.rating, movieObj.overview, movieObj.image, movieObj.watched];
      let queryStr = 'INSERT INTO movielist(title,year,rating,overview,image,watched) value (?,?,?,?,?,?)';
      connection.query(queryStr, params);
    })
    .then(result => {
      res.status(201).send(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
})

app.put('/movies/api', (req, res) => {
  const watched = true;
  let params = [req.body.id, req.body.title, req.body.year, req.body.rating, req.body.overview, req.body.image, watched];
  let queryStr = 'REPLACE INTO movielist(id,title,year,rating,overview,image,watched) value(?,?,?,?,?,?,?)';
  connection.query(queryStr, params)
    .then(result => {
      res.status(201).send(result);
    })
})

app.listen(3000, function() {
  console.log('Server Initiated');
})
