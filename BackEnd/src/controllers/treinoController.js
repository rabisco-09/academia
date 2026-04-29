import * as Treino from "../models/treinoModel.js";

export const listarTreinos = async (req, res) => {
  res.json(await Treino.listarTreinos());
};

export const criarTreino = async (req, res) => {
  await Treino.criarTreino(req.body);
  res.status(201).json({ mensagem: "Treino criado" });
};

export const atualizarTreino = async (req, res) => {
  await Treino.atualizarTreino(req.params.id, req.body);
  res.json({ mensagem: "Atualizado" });
};

export const deletarTreino = async (req, res) => {
  await Treino.deletarTreino(req.params.id);
  res.json({ mensagem: "Deletado" });
};