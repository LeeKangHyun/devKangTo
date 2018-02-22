const express = require('express');
const path = require('path');
const app = express();
const https = require('https');
const http = require('http');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

http.createServer(app).listen(9000, () => {
  console.log('http server running 9000');
});
