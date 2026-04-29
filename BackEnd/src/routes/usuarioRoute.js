import { Router } from "express";
import * as controller from "../controllers/usuarioController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Gerenciamento de usuários do sistema
 */

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Listar usuários
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nome: João
 *                 email: joao@email.com
 *                 perfil: admin
 */
router.get("/", controller.listarUsuarios);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Criar usuário
 *     tags: [Usuários]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: João
 *             email: joao@email.com
 *             senha: 123456
 *             perfil: admin
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 */
router.post("/", controller.criarUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualizar usuário
 *     tags: [Usuários]
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
 *             nome: João Atualizado
 *             email: novo@email.com
 *             perfil: admin
 *     responses:
 *       200:
 *         description: Usuário atualizado
 */
router.put("/:id", controller.atualizarUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Deletar usuário
 *     tags: [Usuários]
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
 *         description: Usuário deletado
 */
router.delete("/:id", controller.deletarUsuario);

export default router;