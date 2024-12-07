import mongoose from "mongoose";

const { Schema } = mongoose;

const solutionSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
});


let solutionModel
if (!mongoose.models.solution)
 solutionModel = mongoose.model("solution", solutionSchema);

console.log(mongoose.models.solution)

export default  mongoose.models.solution || solutionModel;
