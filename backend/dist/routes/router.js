"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const disciplinasPorCursoController_1 = require("../controllers/disciplinasPorCursoController");
// Instância do Router
const routes = (0, express_1.Router)();
// Rota raiz
/**
 * @openapi
 * /api/:
 *   get:
 *     summary: Raiz da API
 *     tags:
 *       - Sistema
 *     responses:
 *       200:
 *         description: Mensagem de boas-vindas
 */
routes.get('/', (request, response) => {
    response.json({ message: 'Bem-vindo ao SUAP!' });
});
// Rota para Listar todas as disciplinas por curso
/**
 * @openapi
 * /api/disciplinas_por_curso:
 *   get:
 *     summary: Listar todas as disciplinas por curso
 *     tags:
 *       - Sistema
 *     responses:
 *       200:
 *         description: Disciplinas por curso
 */
routes.get('/disciplinas_por_curso', disciplinasPorCursoController_1.disciplinasPorCurso);
exports.default = routes;
