// imports

const mongo = require('mongodb').MongoClient;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Post = require('./models/Quote');

// exec

const app = express();
const PORT = process.env.PORT || 3000;

// middleware

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to db

mongoose.connect(process.env.DB_CONNECT || '', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
  console.log('mongoose connected');
});

// routes

app.get('/', async (req, res) => {
  try {
    await res.json('home route');
  } catch (err) {
    res.json({ message: err });
  }
});

const quotesRoute = require('./routes/quotes');
app.use('/quotes', quotesRoute);

// listen

app.listen(PORT), console.log(`running on ${PORT}`);
