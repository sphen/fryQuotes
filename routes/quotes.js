const express = require("express");
const router = express.Router();
const Quote = require("../models/Quote");

// get all quotes
router.get("/", async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.status(200).json(quotes);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

// get random quote
router.get("/random", async (req, res) => {
  const randId = Math.floor((Math.random() * 50) + 1);
  try {
    const quote = await Quote.findOne({ quoteId: randId });
    res.status(200).json(quote);
  } catch (err) {
    res.json({ message: err });
  }
});

// get specific quote
router.get("/:quoteId", async (req, res) => {
  try {
    const quote = await Quote.find({ quoteId: req.params.quoteId });
    res.status(200).json(quote);
  } catch (err) {
    res.json({ message: err });
  }
});

// add new quote
/*
router.post("/", async (req, res) => {
  const quote = new Quote({
    quoteId: req.body.quoteId,
    author:req.body.author,
    quote: req.body.quote,
    episode: req.body.episode,
    season: req.body.season,
  });
  try {
    const savedQuote = await quote.save();
    res.status(201).json(savedQuote);
  } catch (err) {
    res.json({ message: err });
  }
});
*/

// delete specific quote
/*
router.delete("/:quoteId", async (req, res) => {
  try {
    const removedQuote = await Quote.remove({ _id: req.params.quoteId });
  } catch (err) {
    res.json({ message: err });
  }
});

// update a quote
router.patch("/:quoteId", async (req, res) => {
  try {
    const updateQuote = await Quote.updateOne(
      { _id: req.params.quoteId },
      { $set: { title: req.body.title } }
    );
  } catch (err) {
    res.json({ message: err });
  }
});
*/


module.exports = router;
