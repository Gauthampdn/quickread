const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  audio: {
    type: String,
    required: true
  },
  likeCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true })

module.exports = mongoose.model('Article', articleSchema) 