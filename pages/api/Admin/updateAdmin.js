import admin from "../../../models/admin";
import connectDB from "../../../middlewares/mongoose";

const handler = async (req, res) => {
    try {
        const { name, contactNumber, email } = req.body;
        const updatedAdmin = await admin.findOne({ email });
        if (!updatedAdmin) {
            return res.status(404).json({
                message: "Admin does not exist",
                success: false
            })
        }
        updatedAdmin.name = name;
        updatedAdmin.contactNumber = contactNumber;
        await updatedAdmin.save()
        res.status(200).json({
            response: updatedAdmin,
            success: true,
            message: "Admin updated"
        });
    } catch (error) {
        const errors = { backendError: String };
        errors.backendError = error;
        res.status(500).json(errors);
    }
}

export default connectDB(handler)