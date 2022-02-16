import mongoose from "mongoose";

const tutorSchema = mongoose.Schema({
  title: String,
  name: String,
  subject: [String],
  selectedFile: String,
  endorsmentCount: {
    type: Number,
    default: 0,
  },
  activationDate: {
    type: Date,
    default: new Date(),
  },
});

const PostTutor = mongoose.model("PostTutor", tutorSchema);

export default PostTutor;
