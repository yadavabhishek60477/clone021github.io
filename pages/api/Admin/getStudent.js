import student from "../../../models/student.js";
import connectDB from "../../../middlewares/mongoose";
import faculty from "../../../models/faculty.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
//import bcrypt from "bcryptjs";
import subject from "../../../models/subject";

const handler = async (req, res) => {
  try {
    const { token } = req.body;
    const studentToken = jwt.decode(token, process.env.JWT_SECRET)
    const email = studentToken.email
    const errors = { noStudentError: String };
    const students = await student.findOne({ email:email });

    if (!students) {
      errors.noStudentError = "No Student Found";
      return res.status(404).json(errors);
    }

    res.status(200).json({ result: students });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
