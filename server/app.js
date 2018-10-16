const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(3000, function() {
  console.log('Server Initiated');
})