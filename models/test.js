import mongoose from "mongoose";

const testSchema = mongoose.Schema({
  tests: {
    type: String,
    required: true,
    trim: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  totalMarks: {
    type: Number,
    default: 10,
  },
  year: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  image: { type: String, default: "" },
});

let testModel
if (!mongoose.models.test)
 testModel = mongoose.model("test", testSchema);

console.log(mongoose.models.test)

export default  mongoose.models.test || testModel;
