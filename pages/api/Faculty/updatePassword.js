import faculty from "../../../models/faculty.js";
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
    const Faculty = await faculty.findOne({ email });
    let hashedPassword;
    hashedPassword = await bcrypt.hash(newPassword, 10);
    Faculty.password = hashedPassword;
    await Faculty.save();
    if (Faculty.passwordUpdated === false) {
      Faculty.passwordUpdated = true;
      await Faculty.save();
    }
    res.status(200).json({
      success: true,
      message: "Password updated successfully",
      response: Faculty,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
