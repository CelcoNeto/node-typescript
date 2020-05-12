import { Request, Response } from 'express';
class UsuarioController {
  async index(req: Request, res: Response) {
    const response = await res.status(200).json({ message: 'Hello World' });
    return response;
  }
}

export default new UsuarioController();
