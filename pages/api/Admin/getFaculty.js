import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import faculty from "../../../models/faculty.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import subject from "../../../models/subject";

const handler = async (req, res) => {
  try {
    const { department } = req.body;
    const faculties = await faculty.find({ department });
    if (faculties.length === 0) {
      return res.status(404).json("No Faculty Found");
    }
    res.status(200).json({ result: faculties });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
