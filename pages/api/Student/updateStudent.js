import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    const { name, dob, branch, contactNumber, email, batch, section, year } =
      req.body;
    const existingStudent = await student.findOne({ email });
    if (!existingStudent) {
      return res.status(404).json({ message: "Student not found" });
    }
    existingStudent.name = name;
    existingStudent.dob = dob;
    existingStudent.branch = branch;
    existingStudent.contactNumber = contactNumber;
    existingStudent.batch = batch;
    existingStudent.section = section;
    existingStudent.year = year;
    const updatedStudent = await existingStudent.save();
    res.status(200).json({
      message: "Student information updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
