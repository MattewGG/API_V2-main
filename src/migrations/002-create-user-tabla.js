// Importa o módulo mysql2/promise para interagir com o MySQL de forma assíncrona.
const mysql = require("mysql2/promise");
// Importa as configurações de conexão com o banco de dados do arquivo "../config/database.js".
const databaseConfig = require("../config/database");

// Função assíncrona para criar a tabela de usuários no banco de dados.
async function createUserTable() {
  try {
    // Cria uma conexão com o MySQL utilizando as configurações do arquivo de configuração.
    const connection = await mysql.createConnection(databaseConfig);

    // Seleciona o banco de dados a ser utilizado.
    await connection.query(`USE ${databaseConfig.database}`);

    // Executa uma consulta para criar a tabela de usuários se ela não existir.
    await connection.query(`CREATE TABLE IF NOT EXISTS user(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
    )`);

    // Finaliza a conexão com o banco de dados.
    await connection.end();

    // Exibe uma mensagem indicando que a tabela de usuários foi criada com sucesso.
    console.log("Table user Created");
  } catch (error) {
    // Se ocorrer um erro, exibe uma mensagem de erro.
    console.log(`Error creating table User: ${error}`);
  }
}

// Chama a função createUserTable para iniciar o processo de criação da tabela de usuários.
createUserTable();
