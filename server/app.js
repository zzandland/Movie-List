const express = require('express');
const path = require('path');
const app = express();

// Middleware
const parser = require('body-parser');
app.use(parser.json());

// Router
const movieAPIRoute = require('./routes/movieAPI.js');
app.use('/api/movies', movieAPIRoute);

// Serving react client files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(3000, function() {
  console.log('Server Initiated');
})
