const express = require('express');
var app = express();
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.post('/', (req, res) => {
  console.log('some one connect');
});
app.listen(8008);