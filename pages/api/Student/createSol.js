import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import solution from "../../../models/solution.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  try {
    const {
      imageUrl,
      studentId,
      branch,
      year,
      section,
      subjectCode,
      subjectName,
    } = req.body;

    const students = await student.findById(studentId);
    if (!students) {
      return res.status(404).json({ message: "Student not found" });
    }
    const newSolution = new solution({
      imageUrl,
      student: student._id,
      branch,
      year,
      section,
      subjectCode,
      subjectName,
    });
    await newSolution.save();
    res.status(200).json({
      success: true,
      message: "Solution saved successfully",
      solution: newSolution,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
