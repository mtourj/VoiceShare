require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const usersRouter = require('./users/usersRouter');

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})