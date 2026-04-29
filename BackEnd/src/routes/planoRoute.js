import { Router } from "express";
import * as controller from "../controllers/planoController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Planos
 *   description: Gerenciamento de planos da academia
 */

/**
 * @swagger
 * /planos:
 *   get:
 *     summary: Listar planos
 *     tags: [Planos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de planos
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nome: Mensal
 *                 descricao: Plano básico
 *                 valor: 100
 *                 duracao_meses: 1
 *                 ativo: true
 */
router.get("/", controller.listarPlanos);

/**
 * @swagger
 * /planos:
 *   post:
 *     summary: Cadastrar plano
 *     tags: [Planos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Mensal
 *             descricao: Plano básico
 *             valor: 100
 *             duracao_meses: 1
 *     responses:
 *       201:
 *         description: Plano criado com sucesso
 */
router.post("/", controller.criarPlano);

/**
 * @swagger
 * /planos/{id}:
 *   put:
 *     summary: Atualizar plano
 *     tags: [Planos]
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
 *             nome: Mensal Premium
 *             descricao: Plano completo
 *             valor: 150
 *             duracao_meses: 1
 *     responses:
 *       200:
 *         description: Plano atualizado
 */
router.put("/:id", controller.atualizarPlano);

/**
 * @swagger
 * /planos/{id}:
 *   delete:
 *     summary: Deletar plano
 *     tags: [Planos]
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
 *         description: Plano deletado
 */
router.delete("/:id", controller.deletarPlano);

export default router;