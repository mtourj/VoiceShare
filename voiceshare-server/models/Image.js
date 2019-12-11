const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
  // Image priority - This will be used to sort images on posts with more than one image
  order: {
    type: Number,
    default: 0,
    required: true,
  },
  // URL pointing to image
  url: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = mongoose.model('Images', ImageSchema, 'Images');