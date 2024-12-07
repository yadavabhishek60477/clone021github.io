import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import faculty from "../../../models/faculty.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import test from "../../../models/test";

const handler = async (req, res) => {
  try {
    const { department, year, section } = req.body;

    const tests = await test.find({ department, year, section });

    res.status(200).json({ result: tests });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
