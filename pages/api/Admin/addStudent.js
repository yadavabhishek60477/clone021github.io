import student from "../../../lib/models/student.js";
import connectDB from "../../../middlewares/mongoose.js";
import bcrypt from "bcrypt";
import subject from "../../../lib/models/subject";
import branch from "../../../lib/models/branch.js";

const handler = async (req, res) => {
  try {
    const {
      name,
      dob,
      branchName,
      contactNumber,
      email,
      rollNumber,
      year,
    } = req.body;
    const existingStudent = await student.findOne({ email });
    if (existingStudent) {
      // errors.emailError = "Email already exists";
      return res.status(400).json({
        message: "Student already exist"
      });
    }

    const existingDepartment = await branch.findOne({ departmentName: branchName });
    // let departmentHelper = existingDepartment.departmentCode;
    // const students = await student.find({ branch })
    // let helper;
    // if (students.length < 10) {
    //   helper = "00" + students.length.toString();
    // } else if (students.length < 100 && students.length > 9) {
    //   helper = "0" + students.length.toString();
    // } else {
    //   helper = students.length.toString();
    // }

    // var date = new Date();
    // var components = ["STU", date.getFullYear(), departmentHelper, helper];

    // var rollNumber = rollNumber;
    // let hashedPassword;
    const newDob = dob.split("-").reverse().join("-");
    console.log(newDob)
    // hashedPassword = await bcrypt.hash(newDob, 10);
    var passwordUpdated = false;

    const newStudent =new student({
      name,
      dob,
      password: newDob,
      rollNumber,
      branch: branchName,
      contactNumber,
      email,
      subjects: [],
      year,
      passwordUpdated,
    });
    await newStudent.save();

    const subjects = await subject.find({ branchName, year });
    // console.log(department, subjects)
    if (subjects.length !== 0) {
      for (var i = 0; i < subjects.length; i++) {
        newStudent.subjects.push(subjects[i]._id);
      }
    }
    await newStudent.save();

    return res.status(200).json({
      success: true,
      message: "Student registerd successfully",
      response: newStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
