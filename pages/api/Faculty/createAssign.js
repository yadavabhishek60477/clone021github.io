import student from "../../../models/student.js";
import connectDB from "../../../middlewares/mongoose.js";
import faculty from "../../../models/faculty.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import test from "../../../models/test.js";

const handler = async (req, res) => {
  console.log(req.body);
  try {
    const {
      subjectCode,
      department,
      year,
      section,
      date,
      tests,
      totalMarks,
      image,
    } = req.body;
    const newTest = await new test({
      totalMarks,
      section,
      date,
      tests,
      department,
      subjectCode,
      year,
      image,
    });

    await newTest.save();
    return res.status(200).json({
      success: true,
      message: "Test added successfully",
      response: newTest,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
