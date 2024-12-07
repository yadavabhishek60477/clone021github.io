import subject from "../../../models/subject.js";
import student from "../../../models/student.js";
import connectDB from "../../../middlewares/mongoose";
import attendance from "../../../models/attendance.js";

const handler = async (req, res) => {
  console.log(req.body);
  try {
    const { selectedStudents, subjectName, branch, year } = req.body;
    const sub = await subject.findOne({ subjectName });
    const allStudents = await student.find({ branch, year });
    console.log(allStudents.length);
    for (let i = 0; i < allStudents.length; i++) {
      const x = await attendance.findOne({
        student: allStudents[i]._id,
        subject: sub._id,
      });
      if (x) {
        x.totalLecturesByFaculty += 1;
        await x.save();
      } else {
        const at = new attendance({
          student: allStudents[i]._id,
          subject: sub._id,
        });
        at.totalLecturesByFaculty += 1;
        await at.save();
      }
    }

    for (let j = 0; j < selectedStudents.length; j++) {
      const pre = await attendance.findOne({
        student: selectedStudents[j],
        subject: sub._id,
      });
      if (!pre) {
        const attendence = new attendance({
          student: selectedStudents[j],
          subject: sub._id,
        });
        attendence.lectureAttended += 1;
        await attendence.save();
      } else {
        pre.lectureAttended += 1;
        await pre.save();
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
