const express = require('express');
const app = express();

const PORT = 3000; // You can change this to any port you prefer

app.get('/', (req, res) => {
  res.send('Hello, this is your Node.js server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
