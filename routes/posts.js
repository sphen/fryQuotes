const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err });
  }
});

// add new post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// get specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.status(200).json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// delete specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
  } catch (err) {
    res.json({ message: err });
  }
});

// update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
  } catch (err) {
    res.json({ message: err });
  }
});

/*router.post('/', (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  const test = new Post({
    title: "this is a title",
    description: "this is a descrip"
  });
console.log(post);
  test.save()
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json({ message: err });
  });
})*/

module.exports = router;
