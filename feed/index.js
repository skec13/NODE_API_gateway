const express = require('express');

const app = express();

const port = 3002;

app.get('/', (req, res) => {
  res.send('Welcome to the Feed!');
})

app.listen(port, () => {
  console.log(`Feed service is running on port: ${port}`);
})
