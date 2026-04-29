import { Router } from "express";
import * as controller from "../controllers/instrutorController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Instrutores
 *   description: Gerenciamento de instrutores
 */

/**
 * @swagger
 * /instrutores:
 *   get:
 *     summary: Listar instrutores
 *     tags: [Instrutores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de instrutores
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nome: Carlos
 *                 especialidade: Musculação
 *                 telefone: 999999
 *                 email: carlos@email.com
 */
router.get("/", controller.listarInstrutores);

/**
 * @swagger
 * /instrutores:
 *   post:
 *     summary: Cadastrar instrutor
 *     tags: [Instrutores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Carlos
 *             especialidade: Musculação
 *             telefone: 999999
 *             email: carlos@email.com
 *     responses:
 *       201:
 *         description: Instrutor criado com sucesso
 */
router.post("/", controller.criarInstrutor);

/**
 * @swagger
 * /instrutores/{id}:
 *   put:
 *     summary: Atualizar instrutor
 *     tags: [Instrutores]
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
 *             nome: Carlos Atualizado
 *             especialidade: Crossfit
 *             telefone: 888888
 *             email: novo@email.com
 *     responses:
 *       200:
 *         description: Instrutor atualizado
 */
router.put("/:id", controller.atualizarInstrutor);

/**
 * @swagger
 * /instrutores/{id}:
 *   delete:
 *     summary: Deletar instrutor
 *     tags: [Instrutores]
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
 *         description: Instrutor deletado
 */
router.delete("/:id", controller.deletarInstrutor);

export default router;