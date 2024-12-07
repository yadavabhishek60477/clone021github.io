import student from "../../../models/student.js";
import connectDB from "../../../middlewares/mongoose.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;
    const existingStudent = await student.findOne({ email: email });
    console.log(existingStudent)
    if (!existingStudent) {
      return res.status(404).json("Student doesn't exist.");
    }
    console.log("sdbvhjb")
    // const isPasswordCorrect = await bcrypt.compare(
    //   password,
    //   existingStudent.password
    // );
    if (password !== existingStudent.password) {
      return res.status(404).json("Invalid Credentials");
    }
    const token = jwt.sign(
      {
        email: existingStudent.email,
        id: existingStudent._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.EXPIRATION_TIME }
    );
    res.status(200).json({ result: existingStudent, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
