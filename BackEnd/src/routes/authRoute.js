import { Router } from "express";
import { registrar, login } from "../controllers/authController.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Registro e login de usuários
 */

/**
 * @swagger
 * /auth/registrar:
 *   post:
 *     summary: Registrar usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Admin
 *             email: admin@email.com
 *             senha: 123456
 *             perfil: admin
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Email já cadastrado ou campos inválidos
 */
router.post("/registrar", registrar);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login do usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: admin@email.com
 *             senha: 123456
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               mensagem: Login realizado com sucesso
 *               token: JWT_TOKEN_AQUI
 *       401:
 *         description: Senha inválida
 *       404:
 *         description: Usuário não encontrado
 */
router.post("/login", login);

export default router;