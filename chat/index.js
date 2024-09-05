const express = require('express');

const app = express();

const port = 3001;

app.get('/', (req, res) => {
  res.send('Welcome to the Chat!');
})

app.listen(port, () => {
  console.log(`Chat service is running on port: ${port}`);
})
