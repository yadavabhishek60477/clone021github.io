import subject from "../../../models/subject";
import connectDB from "../../../middlewares/mongoose";
import student from "../../../models/student";
const handler = async (req, res) => {
  try {
    const {
      subjectCode,
      subjectName,
      instructorName,
      credits,
      department,
      totalLectures,
      year
    } = req.body;
    const newSubject =new subject({
      subjectCode: subjectCode,
      subjectName: subjectName,
      department: department,
      credits: credits,
      year: year,
      instructorName: instructorName,
      totalLectures: totalLectures,
    });
    await newSubject.save();
    const students = await student.find({ branch: department, year: year });
    // console.log(students)
    if (students.length !== 0) {
      for (var i = 0; i < students.length; i++) {
        students[i].subjects.push(newSubject._id);
        await students[i].save();
      }
    }
    return res.status(200).json({
      success: true,
      message: "Subject added successfully",
      response: newSubject,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error
    });
  }
};

export default connectDB(handler);
