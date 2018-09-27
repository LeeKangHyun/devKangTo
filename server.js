const express = require('express');
const path = require('path');

const app = express();
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3030;

app.get('/api/hello', (req, res) => {
  res.send({express: 'Hello Express'})
});

if (isProduction) {
  app.use(express.static(path.join(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`));
