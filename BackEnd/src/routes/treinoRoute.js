import { Router } from "express";
import * as controller from "../controllers/treinoController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Treinos
 *   description: Gerenciamento de treinos dos alunos
 */

/**
 * @swagger
 * /treinos:
 *   get:
 *     summary: Listar treinos
 *     tags: [Treinos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de treinos com aluno e instrutor (INNER JOIN)
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nome_treino: Treino A
 *                 descricao: Peito e tríceps
 *                 aluno: Maria
 *                 instrutor: Carlos
 */
router.get("/", controller.listarTreinos);

/**
 * @swagger
 * /treinos:
 *   post:
 *     summary: Cadastrar treino
 *     tags: [Treinos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             aluno_id: 1
 *             instrutor_id: 1
 *             nome_treino: Treino A
 *             descricao: Peito e tríceps
 *     responses:
 *       201:
 *         description: Treino criado com sucesso
 */
router.post("/", controller.criarTreino);

/**
 * @swagger
 * /treinos/{id}:
 *   put:
 *     summary: Atualizar treino
 *     tags: [Treinos]
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
 *             nome_treino: Treino B
 *             descricao: Costas e bíceps
 *     responses:
 *       200:
 *         description: Treino atualizado
 */
router.put("/:id", controller.atualizarTreino);

/**
 * @swagger
 * /treinos/{id}:
 *   delete:
 *     summary: Deletar treino
 *     tags: [Treinos]
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
 *         description: Treino deletado
 */
router.delete("/:id", controller.deletarTreino);

export default router;