const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = model('Comment', commentSchema);
