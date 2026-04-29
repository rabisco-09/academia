import conexao from "../config/db.js";

export const listarTreinos = async () => {
  const [rows] = await conexao.query(`
    SELECT t.*, a.nome AS aluno, i.nome AS instrutor
    FROM treinos t
    INNER JOIN alunos a ON t.aluno_id = a.id
    INNER JOIN instrutores i ON t.instrutor_id = i.id
  `);
  return rows;
};

export const criarTreino = async (treino) => {
  const { aluno_id, instrutor_id, nome_treino, descricao } = treino;

  await conexao.query(
    "INSERT INTO treinos (aluno_id, instrutor_id, nome_treino, descricao) VALUES (?, ?, ?, ?)",
    [aluno_id, instrutor_id, nome_treino, descricao]
  );
};

export const atualizarTreino = async (id, treino) => {
  const { nome_treino, descricao } = treino;

  await conexao.query(
    "UPDATE treinos SET nome_treino=?, descricao=? WHERE id=?",
    [nome_treino, descricao, id]
  );
};

export const deletarTreino = async (id) => {
  await conexao.query("DELETE FROM treinos WHERE id=?", [id]);
};