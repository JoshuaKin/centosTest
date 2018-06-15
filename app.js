const express = require('express');
var app = express();
app.post('/', (req, res) => {
  console.log('some one connect');
  console.log(req.body);
});
app.listen(8008);