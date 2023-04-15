const express = require('express');
const cors = require('cors');
const app = express();
const { db } = require('./db/db');

require('dotenv').config();

const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

db().then(() => {
  // Start the server only after the database connection is established
  app.listen(PORT, () => {
    console.log('listening to port:', PORT);
  });
}).catch((error) => {
  console.error('DB Connection Error:', error);
});


// Hello word