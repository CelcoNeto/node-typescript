import { Router } from 'express';
import UsuarioController from '../src/controllers/UserController';
const routes = Router();

routes.get('/', UsuarioController.index);

export default routes;
