import bcrypt from "bcryptjs";
import * as Usuario from "../models/usuarioModel.js";

export const listarUsuarios = async (req, res) => {
  const dados = await Usuario.listarUsuarios();
  res.json(dados);
};

export const criarUsuario = async (req, res) => {
  const { nome, email, senha, perfil } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: "Campos obrigatórios" });
  }

  const hash = await bcrypt.hash(senha, 10);

  await Usuario.criarUsuario({
    nome,
    email,
    senha: hash,
    perfil
  });

  res.status(201).json({ mensagem: "Usuário criado" });
};

export const atualizarUsuario = async (req, res) => {
  await Usuario.atualizarUsuario(req.params.id, req.body);
  res.json({ mensagem: "Atualizado" });
};

export const deletarUsuario = async (req, res) => {
  await Usuario.deletarUsuario(req.params.id);
  res.json({ mensagem: "Deletado" });
};