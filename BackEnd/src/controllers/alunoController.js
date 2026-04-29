import * as Aluno from "../models/alunoModel.js";

export const listarAlunos = async (req, res) => {
  res.json(await Aluno.listarAlunos());
};

export const criarAluno = async (req, res) => {
  await Aluno.criarAluno(req.body);
  res.status(201).json({ mensagem: "Aluno criado" });
};

export const atualizarAluno = async (req, res) => {
  await Aluno.atualizarAluno(req.params.id, req.body);
  res.json({ mensagem: "Atualizado" });
};

export const deletarAluno = async (req, res) => {
  await Aluno.deletarAluno(req.params.id);
  res.json({ mensagem: "Deletado" });
};