var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TweetSchema = new Schema({

  created_at: Date,
  user_id: Number,
  tweet_id: Number, 
  text: String,
  longitude: Number,
  latitude: Number


});

module.exports = mongoose.model('Tweet', TweetSchema);
