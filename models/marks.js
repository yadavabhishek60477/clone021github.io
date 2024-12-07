import mongoose from "mongoose";
const { Schema } = mongoose;

const marksSchema = new Schema({
  exam: {
    type: Schema.Types.ObjectId,
    ref: "test",
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "student",
  },
  marks: {
    type: Number,
    default: -1,
  },
});

let marksModel
if (!mongoose.models.marks)
 marksModel = mongoose.model("marks", marksSchema);

console.log(mongoose.models.marks)

export default  mongoose.models.marks || marksModel;
