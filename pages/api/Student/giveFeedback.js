import feedback from "../../../models/feedback";
import connectDB from "../../../middlewares/mongoose";
import bcrypt from "bcrypt"

const handler = async (req, res) => {
    const {subjectCode, subjectName, instructorName, instructorReview, instructorImporvement, courseReview, courseImprovement, studentEmail} = req.body
    try {
        const hashedEmail = bcrypt.hash(studentEmail, 10);
        const existingFeedback = feedback.findOne({studentEmail: hashedEmail})
        if (existingFeedback) {
            return res.status(400).json({
                success: false,
                message: "Feedback already recieved. Ypu can not give multiple feedbacks"
            })
        }
        const newFeedback = new feedback({
            subjectCode: subjectCode,
            subjectName: subjectName,
            instructorName: instructorName,
            instructorReview: instructorReview,
            instructorImporvement: instructorImporvement,
            courseReview:courseReview,
            courseImporvement:courseImprovement,
            studentEmail: hashedEmail
        })
        await newFeedback.save()
        res.status(200).json({
            success: true,
            message: "Feedback recieved"
        })
    } catch (error) {
        console.log(error)
    }
}

export default connectDB(handler)