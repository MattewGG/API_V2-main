// Importa o módulo mysql2-promise para interagir com o MySQL de forma assíncrona.
const mysql = require("mysql2/promise");
// Importa as configurações de conexão com o banco de dados do arquivo "../config/database.js".
const databaseConfig = require("../config/database.js");

// Função assíncrona para obter todos os usuários do banco de dados.
async function getAllUser() {
  // Cria uma conexão com o MySQL utilizando as configurações do arquivo de configuração.
  const connection = await mysql.createConnection(databaseConfig);

  // Executa uma consulta SQL para selecionar todos os registros da tabela "user".
  const [rows] = await connection.query("SELECT * FROM user");

  // Finaliza a conexão com o banco de dados.
  await connection.end();

  // Retorna os resultados da consulta.
  return rows;
}

async function createUser(name, email, password) {
  const connection = await mysql.createConnection(databaseConfig);

  const insertUser = "INSERT into user(name, email, password) VALUES(?,?,?)";

  await connection.query(insertUser, [name, email, password]);

  await connection.end();
}

async function updateUser(id, name, email, password) {
  const connection = await mysql.createConnection(databaseConfig);

  const updateUser =
    "UPDATE user SET name= ?, email = ?, passaword = ?, WHERE id = ?";

  await connection.query(updateUser, [name, email, password, id]);
  await connection.end();
}

async function deleteUser(id) {
  const connection = await mysql.createConnection(databaseConfig);

  await connection.query("DELETE FROM user WHERE id = ?", [id]);

  await connection.end();
}

async function getUserById(id) {
  const connection = await mysql.createConnection(databaseConfig);

  const [user] = await connection.query("SELECT * FROM user WHERE id = ?", [
    id,
  ]);

  await connection.end();

  return user;
}

// Exporta a função getAllUser para que ela possa ser utilizada em outros arquivos.
module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
};
