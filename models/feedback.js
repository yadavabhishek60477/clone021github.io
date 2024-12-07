import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true,
        trim: true,
    },
    subjectCode: {
        type: String,
        required: true,
    },
    instructorName: { 
        type: String,
        required: true
    },
    courseReview: {
        type: String,
        required: true,
    },
    courseImporvement: {
        type: String,
        required: true,
    },
    instructorReview: {
        type: String,
        required: true,
    },
    instructorImprovement: {
        type: String,
        required: true,
    },
    studentEmail: {
        type: String,
        required: true,
        unique: true
    }
})

let feedbackModel
if (!mongoose.models.feedback)
 feedbackModel = mongoose.model("feedback", feedbackSchema);

console.log(mongoose.models.feedback)

export default  mongoose.models.feedback || feedbackModel;