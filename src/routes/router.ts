import { Router, Request, Response} from 'express';
import { disciplinasPorCurso} from '../controllers/disciplinasPorCursoController';

// Instância do Router
const routes = Router();

// Rota raiz
/**
 * @openapi
 * /:
 *   get:
 *     summary: Raiz da API
 *     tags:
 *       - Sistema
 *     responses:
 *       200:
 *         description: Mensagem de boas-vindas
 */
routes.get('/', (request: Request, response: Response) => {
    response.json({message: 'Bem-vindo ao SUAP!'});
});

// Rota para Listar todas as disciplinas por curso
/**
 * @openapi
 * /disciplinas_por_curso:
 *   get:
 *     summary: Listar todas as disciplinas por curso
 *     tags:
 *       - Sistema
 *     responses:
 *       200:
 *         description: Disciplinas por curso
 */
routes.get('/disciplinas_por_curso', disciplinasPorCurso);






export default routes;