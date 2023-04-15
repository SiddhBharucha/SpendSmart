const express = require('express');
const cors = require('cors');
const app = express();
const { db } = require('./db/db');
const {readdirSync} = require('fs')
require('dotenv').config();

const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

// routes 
readdirSync('./routes').map((route)=> app.use('/api/v1', require('./routes/'+ route)))

db().then(() => {
  // Start the server only after the database connection is established
  app.listen(PORT, () => {
    console.log('listening to port:', PORT);
  });
}).catch((error) => {
  console.error('DB Connection Error:', error);
});
