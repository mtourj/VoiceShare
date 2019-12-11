const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  // Self explanatory items
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  // References to images for this post
  images: [String]
});

module.exports = mongoose.model('Posts', PostSchema, 'Posts');