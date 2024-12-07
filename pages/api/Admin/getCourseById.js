import subject from "../../../models/subject";
import connectDB from "../../../middlewares/mongoose";

const handler = async (req, res) => {
    try {
        const { subjects } = req.body;
        console.log(subjects)
        const arr = []
        for(var i=0;i<arr.length;i++) {
            const subjectDetails = await subject.findOne({_id: subjects[i]})
            console.log(subjectDetails)
            arr.push(subjectDetails)
        }
        res.status(200).json({
            subjects: arr
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Internal Server Message"
        })
    }
}

export default connectDB(handler)