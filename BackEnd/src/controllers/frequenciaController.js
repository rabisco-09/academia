import * as Frequencia from "../models/frequenciaModel.js";

export const listarFrequencias = async (req, res) => {
  res.json(await Frequencia.listarFrequencias());
};

export const criarFrequencia = async (req, res) => {
  await Frequencia.criarFrequencia(req.body);
  res.status(201).json({ mensagem: "Frequência registrada" });
};

export const atualizarFrequencia = async (req, res) => {
  await Frequencia.atualizarFrequencia(req.params.id, req.body);
  res.json({ mensagem: "Atualizado" });
};

export const deletarFrequencia = async (req, res) => {
  await Frequencia.deletarFrequencia(req.params.id);
  res.json({ mensagem: "Deletado" });
};