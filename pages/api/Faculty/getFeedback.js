import feedback from "../../../models/feedback";
import connectDB from "../../../middlewares/mongoose";

const handler = async (req, res) => {
    const {instructorEmail} = req.body
    try {
        const existingFaculty = faculty.find({email: instructorEmail})
        if (!existingFaculty) {
            return res.status(400).json({
                message: "faculty not found",
                success: false,
            })
        }
        const getAllFeedback = await feedback({instructorName: existingFaculty.name})
        res.status(200).json({
            success: true,
            message: "feedback sent",
            response: getAllFeedback
        })
    } catch (error) {
        console.log(error)
        res.json(500).json({
            success: false,
            message: "Error occured"
        })
    }
}

export default connectDB(handler)