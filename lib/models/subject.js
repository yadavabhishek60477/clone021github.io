import mongoose from "mongoose";
const { Schema } = mongoose;
const subjectSchema = new Schema({
  subjectName: {
    type: String,
    required: true,
    trim: true,
  },
  subjectCode: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true,
  },
  totalLectures: {
    type: Number,
    default: 10,
  },
  year: {
    type: String,
    required: true,
  },
  attendence: {
    type: Schema.Types.ObjectId,
    ref: "attendence",
  },
  instructorName: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
	required: true
  },
});

let subjectModel
if (!mongoose.models.subject)
 subjectModel = mongoose.model("subject", subjectSchema);

console.log(mongoose.models.subject)

export default  mongoose.models.subject || subjectModel;