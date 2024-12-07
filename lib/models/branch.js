import mongoose from "mongoose";

console.log("inBranch");

const branchSchema = mongoose.Schema({
  departmentName: {
    type: String,
    required: true,
  },
  departmentCode: {
    type: String,
    required: true,
    unique: true,
  },
});

let branchModel
if (!mongoose.models.branch)
 branchModel = mongoose.model("branch", branchSchema);

console.log(mongoose.models.branch)

export default  mongoose.models.branch || branchModel;
