import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';
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

blogSchema.plugin(mongoosePaginate);

const blogModel = mongoose.model("Blog", blogSchema);

const options = {
  lean: true,
  limit: 8,
  page: 1,
  forceCountFn: true,
};

blogModel.paginate({},options).then({}); 

export default blogModel;
