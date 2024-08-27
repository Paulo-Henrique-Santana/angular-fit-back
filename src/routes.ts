import express from 'express';
import { UsuarioController } from './controllers/usuario/UsuarioController';

const routes = express.Router();

routes.post('/usuarios', UsuarioController.cadastro);

export default routes;