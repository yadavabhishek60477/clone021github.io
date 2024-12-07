import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import test from "../../../models/test.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Marks from "../../../models/marks.js";

const handler = async (req, res) => {
  try {
    const { department, year, section, tests, marks } = req.body;
    const existingTest = await test.findOne({
      department,
      year,
      section,
      tests,
    });
    const isAlready = await Marks.find({
      exam: existingTest._id,
    });

    if (isAlready.length !== 0) {
      errors.examError = "You have already uploaded marks of given exam";
      return res.status(400).json(errors);
    }

    for (var i = 0; i < Marks.length; i++) {
      const newMarks = new Marks({
        student: Marks[i]._id,
        exam: existingTest._id,
        marks: Marks[i].value,
      });
      await newMarks.save();
    }
    res.status(200).json({ message: "Marks uploaded successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
