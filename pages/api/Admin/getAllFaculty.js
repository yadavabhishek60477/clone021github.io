import connectDB from "../../../middlewares/mongoose.js";
import faculty from "../../../lib/models/faculty.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
  try {
    const faculties = await faculty.find();
    res.status(200).json(faculties);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
