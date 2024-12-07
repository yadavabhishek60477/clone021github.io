import formidable from "formidable";
import path from "path";
import fs from "fs";
import { promisify } from "util";
//import {NextApiHandler} from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};
const readdirAsync = promisify(fs.readdir);
const mkdirAsync = promisify(fs.mkdir);

const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/images");
    options.filename = (name, ext, path, form) => {
      return path.originalFilename;
    };
  }
  console.log(options);
  const form = formidable(options);
  console.log(form);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      console.log(files);
      if (err) reject(err);
      resolve((fields, files));
    });
  });
};

const handler = async (req, res) => {
  try {
    await readdirAsync(path.join(process.cwd() + "/public", "images"));
  } catch (error) {
    await mkdirAsync(path.join(process.cwd() + "/public", "images"));
  }
  const files = await readFile(req, true);
  console.log(files);
  res.json({ done: "ok" });
};

export default handler;
