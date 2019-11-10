require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(helmet());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
})