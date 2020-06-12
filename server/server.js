require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const url = process.env.DATABASE;
const app = express();
const mongoose = require('mongoose');

const port = process.env.PORT || 3002;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
  }) // adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
