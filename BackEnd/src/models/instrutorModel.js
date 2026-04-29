import conexao from "../config/db.js";

export const listarInstrutores = async () => {
  const [rows] = await conexao.query("SELECT * FROM instrutores");
  return rows;
};

export const criarInstrutor = async (instrutor) => {
  const { nome, especialidade, telefone, email } = instrutor;

  await conexao.query(
    "INSERT INTO instrutores (nome, especialidade, telefone, email) VALUES (?, ?, ?, ?)",
    [nome, especialidade, telefone, email]
  );
};

export const atualizarInstrutor = async (id, instrutor) => {
  const { nome, especialidade, telefone, email } = instrutor;

  await conexao.query(
    "UPDATE instrutores SET nome=?, especialidade=?, telefone=?, email=? WHERE id=?",
    [nome, especialidade, telefone, email, id]
  );
};

export const deletarInstrutor = async (id) => {
  await conexao.query("DELETE FROM instrutores WHERE id=?", [id]);
};