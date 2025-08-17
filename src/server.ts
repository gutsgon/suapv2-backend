import { app } from "./app";

// Configuração do servidor
const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
})