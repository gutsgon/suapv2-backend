"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'SUAP API',
        version: '1.0.0',
        description: 'Documentação da API SUAP',
    },
    servers: [
        {
            url: 'http://localhost:3333',
            description: 'Desenvolvimento'
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
            },
        },
    },
    security: [
        {
            bearerAuth: [],
        },
    ],
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)({
    swaggerDefinition,
    apis: ['./src/routes/**/*.ts'],
});
