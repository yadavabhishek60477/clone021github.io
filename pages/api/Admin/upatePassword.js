import faculty from "../../../models/faculty";
import connectDB from "../../../middlewares/mongoose";
import jwt from "jsonwebtoken";
const handler = async (req, res) => {
    try {
        const { newPassword, confirmPassword, token } = req.body;
        if (newPassword !== confirmPassword) {
          return res.status(400).json(errors);
        }
        const facultyToken = jwt.decode(token, process.env.JWT_SECRET)
        const existingFaculty = await faculty.findOne({ email: facultyToken.email });
        if (!existingFaculty) {
            return res.status(400).json({
                message: "The admin does not exist"
            })
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        admin.password = hashedPassword;
        await admin.save();
        if (admin.passwordUpdated === false) {
          admin.passwordUpdated = true;
          await admin.save();
        }
    
        res.status(200).json({
          success: true,
          message: "Password updated successfully",
          response: admin,
        });
    } catch (error) {
        const errors = { backendError: String };
        errors.backendError = error;
        res.status(500).json(errors);
    }   
}

export default connectDB(handler)