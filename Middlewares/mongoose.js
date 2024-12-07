import mongoose from "mongoose";

const connectDB = (handler) => async (req, res) => {
  mongoose.set("strictQuery", true);

  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    res.status(500).json({ message: "Unable to connect to database" });
    return;
  }
  // Proceed to the next middleware with the established database connection
  return handler(req, res);
};

export default connectDB;
