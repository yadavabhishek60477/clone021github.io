import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  try {
    const { newPassword, confirmPassword, email } = req.body;
    if (newPassword !== confirmPassword) {
      return res
        .status(400)
        .json("Your password and confirmation password do not match");
    }
    const Student = await student.findOne({ email });
    let hashedPassword;
    hashedPassword = await bcrypt.hash(newPassword, 10);
    Student.password = hashedPassword;
    await Student.save();
    if (Student.passwordUpdated === false) {
      Student.passwordUpdated = true;
      await Student.save();
    }
    res.status(200).json({
      success: true,
      message: "Password updated successfully",
      response: Student,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
