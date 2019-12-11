const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // This is a unique identifier provided by Auth0, required to create the user doc
  sub: {
    type: String,
    required: true,
  },
  // Self explanatory items
  // MongoDB automatically assigns an id
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  // ID that points to Image document
  avatar: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false,
    trim: true
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  country: {
    type: String,
    default: '',
    trim: true
  },
  bio: {
    type: String,
    default: '',
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: false
  },
  // PayPal email used for recieving and sending payments
  paypalEmail: {
    type: String,
    required: false,
    trim: true
  },
  // These are referebces to posts made by this user
  posts: [String],
  // These are references to chats this user is subscribed to
  chats: [String],
  // These are references to all orders this user has made on the site
  orders: [String],
  // These are references to all reviews this user has made on the site
  reviews: [String]
})

module.exports = mongoose.model('Users', UserSchema, 'Users');