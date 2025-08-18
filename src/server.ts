import { app } from "./app";

// Configuração do servidor
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Servidor rodando em http://${host}:${port}`);
})