const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Payment success route
app.get('/payment-success', (req, res) => {
  res.send('Payment Successful');
});

// Set the port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
