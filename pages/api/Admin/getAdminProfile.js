import admin from "../../../lib/models/admin";
import connectDB from "../../../middlewares/mongoose";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
    // const {token} = req.body
    // console.log(req)
    try {
//         const body = req.body
//         const startTokenIndex = body.indexOf('name="token"\r\n\r\n') + 'name="token"\r\n\r\n'.length;
// const endTokenIndex = body.indexOf('\r\n------', startTokenIndex);
// const token = body.substring(startTokenIndex, endTokenIndex).trim();

        // console.log(token)
        const adminToken = jwt.decode(req.body.token, process.env.JWT_SECRET);        
        const existingAdmin = await admin.findOne({email: adminToken.email})
        // console.log(existingAdmin )
        // if (!existingAdmin) {
        //     return res.status(404).json({
        //         success: false,
        //         message: "Admin not found"
        //     })
        // }   
        res.status(200).json({
            success: true,
            message: "Admin details",
            admin: existingAdmin
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: "Error Occured"
        })
    }
}

export default connectDB(handler)