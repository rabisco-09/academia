import conexao from "../config/db.js";

export const listarFrequencias = async () => {
  const [rows] = await conexao.query(`
    SELECT f.*, a.nome AS aluno
    FROM frequencias f
    INNER JOIN alunos a ON f.aluno_id = a.id
  `);
  return rows;
};

export const criarFrequencia = async (frequencia) => {
  const { aluno_id, data_frequencia, presente, observacao } = frequencia;

  await conexao.query(
    "INSERT INTO frequencias (aluno_id, data_frequencia, presente, observacao) VALUES (?, ?, ?, ?)",
    [aluno_id, data_frequencia, presente, observacao]
  );
};

export const atualizarFrequencia = async (id, frequencia) => {
  const { presente, observacao } = frequencia;

  await conexao.query(
    "UPDATE frequencias SET presente=?, observacao=? WHERE id=?",
    [presente, observacao, id]
  );
};

export const deletarFrequencia = async (id) => {
  await conexao.query("DELETE FROM frequencias WHERE id=?", [id]);
};