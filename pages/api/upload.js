import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";

const express = require("express");
const multer = require("multer");
//const cloudinary = require("cloudinary").v2;
const app = express();
const fileUpload = require("express-fileupload");

cloudinary.config({
  cloud_name: "ddwsfzb4i",
  api_key: "728413219329618",
  api_secret: "nv1Jk4FgzobaxI5fgsGb8iwCn1E",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

app.use(
  fileUpload({
    useTempFiles: true,
  })
);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const upload = multer({ storage: storage });
 const handler = async (req, res) => {
  //const {file} = req.body
  console.log(req.filex)
  // const form = formidable();

  // form.parse(req, async (err, fields, files) => {
  //   console.log("Fields:", fields);
  //   console.log("Files:", files);
  //   if (!files.file || !files.file.length) {
  //     res.status(400).json({ error: "No file uploaded", fields, files });
  //     return;
  //   }
  //   console.log("File Object:", files.file);
    try {
      if (!req.files) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      // const filer = files.file[0];
      // console.log("File:", filer);
      // console.log("File Path:", filer.filepath);

      // const upload = multer({ storage: storage }).single("file");
      // upload(req, res, function (err) {
      //   if (err) {
      //     console.error("Error uploading file:", err);
      //     return res.status(500).json({ message: "Error uploading file." });
      //   }
      //   // File uploaded successfully
      //   res.status(200).json({ message: "File uploaded successfully." });
      // });
      // const result = await cloudinary.uploader.upload(filer.filepath);
      // console.log("File uploaded successfully to Cloudinary:", result);
      // res
      //   .status(200)
      //   .json({ message: "File uploaded successfully.", url: result.url });
    } catch (error) {
      console.error("Error uploading file to Cloudinary:", error);
      res.status(500).json({ message: "Error uploading file." });
    }
 // });
};
// handler.post(upload.single("file"), (req, res) => {
//   try {
//     // Check if file was uploaded
//     if (!req.files) {
//       return res.status(400).json({ error: "No file uploaded" });
//     }
//     console.log(req.files);
//     // Return uploaded file information
//     res.status(200).json({
//       message: "File uploaded successfully",
//       filename: req.files.filename,
//       path: `/uploads/${req.file.filename}`,
//     });
//   } catch (error) {
//     console.error("Error uploading file:", error);
//     res.status(500).json({ message: "Error uploading file" });
//   }
// });

export default handler;
