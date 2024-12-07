import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import test from "../../../models/test.js";
import branch from "../../../models/branch.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Marks from "../../../models/marks.js";

const handler = async (req, res) => {
  try {
    const { branch, year, section } = req.body;
    const stud = await student.findOne({ branch, section, year });
    const assign = await test.findOne({ branch, section, year });
    if (test.length === 0) {
      return res.status(404).json("No Test Found");
    }
    var result = [];
    for (var i = 0; i < test.length; i++) {
      var subjectCode = test[i].subjectCode;
      var subject = await subject.findOne({ subjectCode });
      var marks = await Marks.findOne({
        student: stud._id,
        exam: assign[i]._id,
      });
      if (marks) {
        var temp = {
          marks: marks.marks,
          totalMarks: test[i].totalMarks,
          subjectName: subject.subjectName,
          subjectCode,
          test: test[i].tests,
        };
        result.push(temp);
      }
    }
    res.status(200).json({ result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
