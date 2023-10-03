import { Request, Response } from "express";

class WelcomeController {
  async index(req: Request, res: Response) {
    res.send("Servidor on!");
  }
}

export default new WelcomeController();
