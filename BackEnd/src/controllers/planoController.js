import * as Plano from "../models/planoModel.js";

export const listarPlanos = async (req, res) => {
  res.json(await Plano.listarPlanos());
};

export const criarPlano = async (req, res) => {
  await Plano.criarPlano(req.body);
  res.status(201).json({ mensagem: "Plano criado" });
};

export const atualizarPlano = async (req, res) => {
  await Plano.atualizarPlano(req.params.id, req.body);
  res.json({ mensagem: "Atualizado" });
};

export const deletarPlano = async (req, res) => {
  await Plano.deletarPlano(req.params.id);
  res.json({ mensagem: "Deletado" });
};