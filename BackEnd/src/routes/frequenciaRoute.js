import { Router } from "express";
import * as controller from "../controllers/frequenciaController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Frequências
 *   description: Controle de presença dos alunos
 */

/**
 * @swagger
 * /frequencias:
 *   get:
 *     summary: Listar frequências
 *     tags: [Frequências]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de frequências com nome do aluno
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 aluno_id: 1
 *                 aluno: Maria
 *                 data_frequencia: 2025-01-01
 *                 presente: true
 *                 observacao: Treino completo
 */
router.get("/", controller.listarFrequencias);

/**
 * @swagger
 * /frequencias:
 *   post:
 *     summary: Registrar frequência
 *     tags: [Frequências]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             aluno_id: 1
 *             data_frequencia: 2025-01-01
 *             presente: true
 *             observacao: Treino completo
 *     responses:
 *       201:
 *         description: Frequência registrada com sucesso
 */
router.post("/", controller.criarFrequencia);

/**
 * @swagger
 * /frequencias/{id}:
 *   put:
 *     summary: Atualizar frequência
 *     tags: [Frequências]
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
 *             presente: false
 *             observacao: Faltou
 *     responses:
 *       200:
 *         description: Frequência atualizada
 */
router.put("/:id", controller.atualizarFrequencia);

/**
 * @swagger
 * /frequencias/{id}:
 *   delete:
 *     summary: Deletar frequência
 *     tags: [Frequências]
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
 *         description: Frequência deletada
 */
router.delete("/:id", controller.deletarFrequencia);

export default router;