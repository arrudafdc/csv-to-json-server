import { Request, Response } from "express";

class UploadController {
  async index(req: Request, res: Response) {
    console.log(req.file);
    res.json({ message: "teste" });
  }
}

export default new UploadController();
