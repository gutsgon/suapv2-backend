"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
// Configuração do servidor
const host = process.env.HOST;
const port = process.env.PORT;
app_1.app.listen(port, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
});
