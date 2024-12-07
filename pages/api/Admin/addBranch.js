import connectDB from "../../../middlewares/mongoose.js";
import branch from "../../../lib/models/branch.js";

const handler = async (req, res) => {
  try {
    const { departmentCode, departmentName } = req.body;
    // const existingDepartment = await branch.findOne({ department });
    // if (existingDepartment) {
    //   errors.departmentError = "Department already added";
    //   return res.status(400).json(errors);
    // }
    
    const existingBranch = await branch.findOne({departmentCode: departmentCode});
    console.log(existingBranch)
    if (existingBranch) {
      return res.status(402).json({
        success: false,
        message: "Branch Exist"
      })
    }
    // let add = departments.length + 1;
    // let departmentCode;
    // if (add < 9) {
    //   departmentCode = "0" + add.toString();
    // } else {
    //   departmentCode = add.toString();
    // }

    const newDepartment = await new branch({
      departmentName,
      departmentCode,
    });

    await newDepartment.save();
    return res.status(200).json({
      success: true,
      message: "Department added successfully",
      response: newDepartment,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default connectDB(handler);
