require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

// Router imports
const usersRouter = require('./users/usersRouter');

const app = express();

const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());

// Routes
app.get('/', (req, res) => {
  res.status(200).json({message: "She's alive"});
})
app.use('/users', usersRouter);

// Connect to the database on MongoDB Atlas
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
  if(err) console.error('Failed to connect: ' + err);
  else console.log('Atlas connected')
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})