import { Router } from "express";
import * as controller from "../controllers/alunoController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Gerenciamento de alunos
 */

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Listar alunos
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de alunos com plano
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nome: Maria
 *                 cpf: 12345678900
 *                 telefone: 99999
 *                 email: maria@email.com
 *                 plano: Mensal
 */
router.get("/", controller.listarAlunos);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cadastrar aluno
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Maria
 *             cpf: 12345678900
 *             telefone: 99999
 *             email: maria@email.com
 *             data_nascimento: 2000-01-01
 *             plano_id: 1
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 */
router.post("/", controller.criarAluno);

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualizar aluno
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Maria Atualizada
 *             telefone: 88888
 *             email: novo@email.com
 *             plano_id: 1
 *             status: ativo
 *     responses:
 *       200:
 *         description: Aluno atualizado
 */
router.put("/:id", controller.atualizarAluno);

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Deletar aluno
 *     tags: [Alunos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Aluno deletado
 */
router.delete("/:id", controller.deletarAluno);

export default router;