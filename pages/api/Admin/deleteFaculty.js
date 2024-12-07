import faculty from "../../../lib/models/faculty";
import connectDB from "../../../middlewares/mongoose";
import jwt from "jsonwebtoken"
import admin from "../../../lib/models/admin";

const handler = async(req, res) => {
    const {instructorEmail, adminToken} = req.body
    try {
        const token = jwt.decode(adminToken, process.env.JWT_SECRET)
        const adminEmail = token.email
        const existingAdmin = await admin.find({email: adminEmail})
        if (!existingAdmin) {
            res.status(401).json({
                success: false,
                message: "Unauthorized access request"
            })
        }
        console.log(instructorEmail)
        await faculty.findOneAndDelete({email: instructorEmail})
        res.status(200).json({
            message: "Faculty removed",
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "error occured",
            success: false,
            response: error
        })
    }
}

export default connectDB(handler)