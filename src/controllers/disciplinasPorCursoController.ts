import { Request, Response } from "express";
import { db } from '../data/db'

export const disciplinasPorCurso = async (request:Request, response:Response) => {
    try{
        const data: any[] = await db.$queryRaw`SELECT
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
        `
        if(!data){
            response.status(400).json({error: "Erro ao procurar cursos e disciplinas"})
            return;
        }
        
        const formatedData = data.map(row => ({
            nome_curso: row.nome_curso,
            quantidade_disciplinas: Number(row.quantidade_disciplinas)  // 👈 Aqui converte BigInt para Number
        }));
        response.status(200).json(formatedData)
        return;
    }catch(error){
        response.status(400).json({error: "Erro ao procurar cursos e disciplinas"})
        console.log(error)
        return;
    }
}