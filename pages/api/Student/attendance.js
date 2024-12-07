import student from "../../../models/student.js";
import connectDB from "../../../middleware/mongoose";
import attendance from "../../../models/attendance.js";

const handler = async (req, res) => {
  try {
    const { department, year, section } = req.body;
    const Student = await student.findOne({ department, year, section });

    const Attendance = await attendance
      .find({
        student: student._id,
      })
      .populate("subject");
    if (!Attendance) {
      res.status(400).json({ message: "Attendence not found" });
    }
    res.status(200).json({
      result: Attendance.map((it) => {
        let res = {};
        res.percentage =
          it.totalLecturesByFaculty > 0
            ? ((it.lectureAttended / it.totalLecturesByFaculty) * 100).toFixed(
                2
              )
            : 0;
        res.subjectCode = it.subject.subjectCode;
        res.subjectName = it.subject.subjectName;
        res.attended = it.lectureAttended;
        res.total = it.totalLecturesByFaculty;
        return res;
      }),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
