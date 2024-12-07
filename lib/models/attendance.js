import mongoose from "mongoose";
const { Schema } = mongoose;
const attendenceSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "student",
  },
  subject: {
    type: Schema.Types.ObjectId,
    ref: "subject",
  },
  totalLecturesByFaculty: {
    type: Number,
    default: 0,
  },
  lectureAttended: {
    type: Number,
    default: 0,
  },
});

let attendenceModel
if (!mongoose.models.attendence)
 attendenceModel = mongoose.model("attendence", attendenceSchema);

console.log(mongoose.models.attendence)

export default  mongoose.models.attendence || attendenceModel;