import bcrypt from "bcrypt"
import connectDB from "../../../middlewares/mongoose"
import admin from "../../../lib/models/admin"
import jwt from"jsonwebtoken"

const handler = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        console.log("Enter valid details")
        res.status(400).json({
            success: false,
            message: "Invalid Credentials"
        })
    }
    try {
        const existingAdmin = await admin.findOne({ email: email });
        if (!existingAdmin) {
            // errors.emailError = "Admin doesn't exist.";
            return res.status(404).json({
                message: "Admin doesn't exist",
                success: false
            });
        }
        // const hashPassword = await bcrypt.hash(password, 10)
        // const isPasswordCorrect = await bcrypt.compare(
        //     hashPassword,
        //     existingAdmin.password
        // );
        const isPasswordCorrect = existingAdmin.password === password
        console.log(isPasswordCorrect)
        if (!isPasswordCorrect) {
            // errors.passwordError = "Invalid Credentials";
            return res.status(401).json({
                message: "Incorrect Password",
                success: false
            });
        }
        
        const token = jwt.sign(
            {
            email: existingAdmin.email,
            id: existingAdmin._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.EXPIRATION_TIME }
        );
    
        res.status(200).json({ 
            adminToken: token,
            success: true,
            message: "Login Successful"
        });
        } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error
        })
    }
};

export default connectDB(handler)