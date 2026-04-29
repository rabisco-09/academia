import conexao from "../config/db.js";

export const listarUsuarios = async () => {
  const [rows] = await conexao.query(
    "SELECT id, nome, email, perfil FROM usuarios"
  );
  return rows;
};

export const criarUsuario = async (usuario) => {
  const { nome, email, senha, perfil } = usuario;

  await conexao.query(
    "INSERT INTO usuarios (nome, email, senha, perfil) VALUES (?, ?, ?, ?)",
    [nome, email, senha, perfil]
  );
};

export const atualizarUsuario = async (id, usuario) => {
  const { nome, email, perfil } = usuario;

  await conexao.query(
    "UPDATE usuarios SET nome=?, email=?, perfil=? WHERE id=?",
    [nome, email, perfil, id]
  );
};

export const deletarUsuario = async (id) => {
  await conexao.query("DELETE FROM usuarios WHERE id=?", [id]);
};