import { Request, Response } from "express";
import CsvToJsonWithStreams from "../services/CsvToJsonWithStrams";

class UploadController {
  async index(req: Request, res: Response) {
    if (req.file) {
      const fileName = req.file.filename;

      const csvToJsonWithStreams = new CsvToJsonWithStreams(fileName);
      csvToJsonWithStreams.createJson(fileName, ",");

      res.json({ file: fileName, message: "success" });
    } else {
      return res.status(400).json({ message: "no files were sent" });
    }
  }
}

export default new UploadController();
