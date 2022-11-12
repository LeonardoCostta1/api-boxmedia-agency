import mongoose from "mongoose";

const comment = new mongoose.Schema({
  name: String,
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String
  }
});
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  text: {
    type: String
  },
  image: {
    type: String
  },

  author: {
    type: String,
    require: true
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [comment],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const blogModel = mongoose.model("Blog", blogSchema);

export default blogModel;
