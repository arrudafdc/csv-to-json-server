import multer, { Options } from "multer";
import path from "path";

const multerConfig: Options = {
  dest: path.resolve(__dirname, "..", "..", "uploads"),
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      const fileName = Date.now() + "-" + file.originalname;
      cb(null, fileName);
    },
  }),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = "text/csv";
    if (allowedMimes === file.mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Format not accepted"));
    }
  },
};

export default multerConfig;
