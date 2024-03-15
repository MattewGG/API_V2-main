// Importa o módulo mysql2/promise para interagir com o MySQL de forma assíncrona.
const mysql = require("mysql2/promise");
// Importa as configurações de conexão com o banco de dados do arquivo "../config/database.js".
const databaseConfig = require("../config/database.js");

// Função assíncrona para criar o banco de dados.
async function createDataBase() {
  try {
    // Cria uma conexão com o MySQL utilizando as configurações do arquivo de configuração.
    const connection = await mysql.createConnection({
      host: databaseConfig.host,
      user: databaseConfig.user,
      password: databaseConfig.password,
    });

    // Executa uma consulta para criar o banco de dados se ele não existir.
    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${databaseConfig.database}`
    );

    // Finaliza a conexão com o banco de dados.
    await connection.end();

    // Exibe uma mensagem indicando que o banco de dados foi criado com sucesso.
    console.log("Database Created");
  } catch (error) {
    // Se ocorrer um erro, exibe uma mensagem de erro.
    console.log(`Error creating database: ${error}`);
  }
}

// Chama a função createDataBase para iniciar o processo de criação do banco de dados.
createDataBase();
