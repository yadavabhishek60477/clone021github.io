import student from "../../../lib/models/student.js";
import connectDB from "../../../middlewares/mongoose.js";
import faculty from "../../../lib/models/faculty.js";
import branch from "../../../lib/models/branch.js";
import jwt from "jsonwebtoken";
import subject from "../../../lib/models/subject.js";

const handler = async (req, res) => {
  try {
    // console.log("bsdkbvj")
    const departments = await branch.find();
    res.status(200).json(departments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
