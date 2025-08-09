// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve files from "public" folder

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
