const mysql = require("mysql2/promise");

const databaseConfig = require("../config/database");

async function createUserTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS  product(
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            descricao VARCHAR(255) NOT NULL,
            quantidadeEstoque  DOUBLE NOT NULL,
            unidadeMedia VARCHAR(255) NOT NULL,
            valorUnidade int NOT NULL 
            

        
        )`);

    await connection.end();

    console.log("Table product created");
  } catch (error) {
    console.log(`error creating product table: ${error}`);
  }
}

createUserTable();
