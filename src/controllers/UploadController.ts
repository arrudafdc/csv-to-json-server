import { Request, Response } from "express";
import CsvToJsonWithStreams from "../services/CsvToJsonWithStrams";
import path from "path";
import RemoveFiles from "../services/RemoveFiles";

class UploadController {
  async index(req: Request, res: Response) {
    if (req.file) {
      const fileName = req.file.filename;
      const jsonFileName = fileName.replace(".csv", ".json");

      console.log(req.file);

      const csvToJsonWithStreams = new CsvToJsonWithStreams(fileName);
      csvToJsonWithStreams.createJson(fileName, ",");

      res.json({ file: fileName, message: "success" });

      RemoveFiles.index(
        path.resolve(__dirname, "..", "..", "uploads", fileName)
      );
      RemoveFiles.index(
        path.resolve(__dirname, "..", "..", "downloads", jsonFileName)
      );
    } else {
      return res.status(400).json({ message: "no files were sent" });
    }
  }
}

export default new UploadController();
