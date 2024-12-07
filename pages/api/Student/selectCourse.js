import subject from "../../../models/subject";
import student from "../../../models/student";
import connectDB from "../../../middlewares/mongoose";

const handler = async (req, res) => {
  try {
    const { subjectCode, studentEmail } = req.body;
    const getStudent = await student.find({ email: studentEmail });
    const studentData = {
      studentName: getStudent.name,
      studentEmail: getStudent.email,
      lecturesAttended: 0,
    };
    const subjectDetails = await subject.find({ subjectCode: subjectCode });
    //subject find ,update the student while enroll
    //this gives subject id
    for (let i = 0; i < subjectCode.length; i++) {
      const sub = await subject.findOne({ subjectCode: subjectCode[i] });
      const studentUpdate = await student.findOne({ subjects: sub._id });
      if (!studentUpdate) {
        const x = new student({
          subjects: sub._id,
        });
        await x.save();
      }
    }
    // const enrollStudentInSubject = await subject.updateOne(
    //     {subjectCode: subjectCode},
    //     { $push: {attendance: studentData}},
    //     function(error, result) {
    //         if (error) {
    //             console.error("Error while pushing data:", error);
    //         } else {
    //             console.log("Data pushed successfully:", result);
    //         }
    //     }
    // )
    // const updatingStudentEnrolledSubjects = await student.updateOne(
    //     {email: studentEmail},
    //     { $push : {subjects: subjectDetails._id}},
    //     function(error, result) {
    //         if (error) {
    //             console.error("Error while pushing data:", error);
    //         } else {
    //             console.log("Data pushed successfully:", result);
    //         }
    //     }
    // )
    res.json({ message: "Student enrolled in the subject." }).status(200);
  } catch (error) {
    console.log(error);
    res.json(error).status(500);
  }
};

export default connectDB(handler);
