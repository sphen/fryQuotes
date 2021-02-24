const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  quoteId: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  },
  episode: {
    type: Number,
    required: true
  },
  season: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("fry-quotes", PostSchema);
