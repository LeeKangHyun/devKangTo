const express = require('express');
const path = require('path');
const app = express();
const http = require('http');

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(9000, () => {
  console.log('http server running 9000');
});
