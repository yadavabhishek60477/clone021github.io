import connectDB from "../../middlewares/mongoose";
import Faculty from "../../models/faculty";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  try {

    // Extract the token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];

    // Verify and decode the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const facultyIdentifier = decodedToken.email;

    // Query the database for the faculty details based on the identifier
    const facultyDetails = await Faculty.findOne({ email: facultyIdentifier });

    if (!facultyDetails) {
      return res
        .status(404)
        .json({ success: false, message: "Faculty details not found" });
    }

    // If the faculty details are found, return them in the response
    res.status(200).json({ success: true, faculty: facultyDetails });

  } catch (error) {
    console.error("Error decoding token or retrieving faculty details:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Error decoding token or retrieving faculty details",
        error,
      });
  }
};

export default connectDB(handler);
