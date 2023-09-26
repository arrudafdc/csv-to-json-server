import { Request, Response } from "express";

class UploadController {
  async index(req: Request, res: Response) {
    if (req.file) {
      const fileName = req.file.filename;
      res.json({ file: fileName, message: "success" });
    } else {
      return res.status(400).json({ message: "no files were sent" });
    }
  }
}

export default new UploadController();
