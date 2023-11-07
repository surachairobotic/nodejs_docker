const express = require('express');
const app = express();

const PORT = 8001; // You can change this to any port you prefer

app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server!');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
