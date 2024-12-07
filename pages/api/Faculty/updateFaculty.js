import faculty from "../../../models/faculty.js";
import connectDB from "../../../middleware/mongoose";

const handler = async (req, res) => {
  try {
    const { name, dob, branch, contactNumber, email, designation } = req.body;
    const existingFaculty = await faculty.findOne({ email });
    if (!existingFaculty) {
      return res.status(404).json({ message: "Faculty not found" });
    }
    existingFaculty.name = name;
    existingFaculty.dob = dob;
    existingFaculty.branch = branch;
    existingFaculty.contactNumber = contactNumber;
    existingFaculty.batch = batch;
    existingFaculty.section = section;
    existingFaculty.year = year;
    existingFaculty.designation = designation;
    const updatedFaculty = await existingFaculty.save();
    res.status(200).json({
      message: "Faculty information updated successfully",
      student: updatedFaculty,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
