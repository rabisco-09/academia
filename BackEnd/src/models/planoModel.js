import conexao from "../config/db.js";

export const listarPlanos = async () => {
  const [rows] = await conexao.query("SELECT * FROM planos");
  return rows;
};

export const criarPlano = async (plano) => {
  const { nome, descricao, valor, duracao_meses } = plano;

  await conexao.query(
    "INSERT INTO planos (nome, descricao, valor, duracao_meses) VALUES (?, ?, ?, ?)",
    [nome, descricao, valor, duracao_meses]
  );
};

export const atualizarPlano = async (id, plano) => {
  const { nome, descricao, valor, duracao_meses } = plano;

  await conexao.query(
    "UPDATE planos SET nome=?, descricao=?, valor=?, duracao_meses=? WHERE id=?",
    [nome, descricao, valor, duracao_meses, id]
  );
};

export const deletarPlano = async (id) => {
  await conexao.query("DELETE FROM planos WHERE id=?", [id]);
};