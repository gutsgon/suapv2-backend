"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disciplinasPorCurso = void 0;
const db_1 = require("../data/db");
const disciplinasPorCurso = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield db_1.db.$queryRaw `SELECT
        c.tx_descricao AS nome_curso,
        COUNT(d.id_disciplina) AS quantidade_disciplinas
        FROM
        curso c
        LEFT JOIN
        disciplina d ON c.id_curso = d.id_curso
        GROUP BY
        c.tx_descricao
        ORDER BY
        c.tx_descricao;
        `;
        if (!data) {
            response.status(400).json({ error: "Erro ao procurar cursos e disciplinas" });
            return;
        }
        const formatedData = data.map(row => ({
            nome_curso: row.nome_curso,
            quantidade_disciplinas: Number(row.quantidade_disciplinas) // 👈 Aqui converte BigInt para Number
        }));
        response.status(200).json(formatedData);
        return;
    }
    catch (error) {
        response.status(400).json({ error: "Erro ao procurar cursos e disciplinas" });
        console.log(error);
        return;
    }
});
exports.disciplinasPorCurso = disciplinasPorCurso;
