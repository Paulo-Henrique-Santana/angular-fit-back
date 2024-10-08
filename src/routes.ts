import express from 'express';
import { UsuarioController } from './controllers/usuario/UsuarioController';

const routes = express.Router();

routes.post('/usuarios', UsuarioController.cadastro);
routes.post('/login', UsuarioController.login);
routes.get('/usuarios', UsuarioController.getList);

export default routes;