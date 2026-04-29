import * as Instrutor from "../models/instrutorModel.js";

export const listarInstrutores = async (req, res) => {
  res.json(await Instrutor.listarInstrutores());
};

export const criarInstrutor = async (req, res) => {
  await Instrutor.criarInstrutor(req.body);
  res.status(201).json({ mensagem: "Instrutor criado" });
};

export const atualizarInstrutor = async (req, res) => {
  await Instrutor.atualizarInstrutor(req.params.id, req.body);
  res.json({ mensagem: "Atualizado" });
};

export const deletarInstrutor = async (req, res) => {
  await Instrutor.deletarInstrutor(req.params.id);
  res.json({ mensagem: "Deletado" });
};