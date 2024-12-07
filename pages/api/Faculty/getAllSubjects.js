import subject from "../../../models/subject";
import connectDB from "../../../middlewares/mongoose";
import faculty from "../../../models/faculty";

const handler = async (req, res) => {
  const { instructorEmail } = req.body;
  console.log(req.body);
  try {
    const existingFaculty = await faculty.findOne({ email: instructorEmail });
    if (!existingFaculty) {
      return res.status(400).json({
        message: "faculty not found",
        success: false,
      });
    }
    const subjectsByFaculty = await subject.findOne({
      instructorName: existingFaculty.name,
    });
    res.status(200).json({
      success: true,
      message: "Subjects found",
      response: subjectsByFaculty,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error occured",
      success: false,
      response: error,
    });
  }
};

export default connectDB(handler);
