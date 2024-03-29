// api.js
const express = require('express');

const app = express();
const port = 7865;

app.listen(port, () => {
  console.log(`API available on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for cart with validation for :id as a number
app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

module.exports = app;
