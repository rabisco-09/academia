import conexao from "../config/db.js";

export const listarAlunos = async () => {
  const [rows] = await conexao.query(`
    SELECT a.*, p.nome AS plano
    FROM alunos a
    LEFT JOIN planos p ON a.plano_id = p.id
  `);
  return rows;
};

export const criarAluno = async (aluno) => {
  const { nome, cpf, telefone, email, data_nascimento, plano_id } = aluno;

  await conexao.query(
    "INSERT INTO alunos (nome, cpf, telefone, email, data_nascimento, plano_id) VALUES (?, ?, ?, ?, ?, ?)",
    [nome, cpf, telefone, email, data_nascimento, plano_id]
  );
};

export const atualizarAluno = async (id, aluno) => {
  const { nome, telefone, email, plano_id, status } = aluno;

  await conexao.query(
    "UPDATE alunos SET nome=?, telefone=?, email=?, plano_id=?, status=? WHERE id=?",
    [nome, telefone, email, plano_id, status, id]
  );
};

export const deletarAluno = async (id) => {
  await conexao.query("DELETE FROM alunos WHERE id=?", [id]);
};