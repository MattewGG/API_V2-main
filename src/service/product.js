const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");
const { emit } = require("nodemon");
const { updateUser } = require("./user.js");
const { use } = require("../router/userRouter.js");

async function getAllproduct() {
  const connection = await mysql.createConnection(databaseConfig);

  const [rows] = await connection.query("SELECT * FROM product");

  await connection.end();
  return rows;
}

async function createProduct(
  descricao,
  quantidadeEstoque,
  unidadeMedida,
  valorUnidade
) {
  const connection = await mysql.createConnection(databaseConfig);
  const insertProduct =
    "INSERT into product(descrição, quantidadeEstoque, unidadeMedia, valorUnidade) VALUES(?,?,?,?)";
  await connection.query(insertProduct, [
    descricaom,
    quantidadeEstoque,
    unidadeMedida,
    valorUnidade,
  ]);
  await connection.end();
}

async function updateProduct(
  descricao,
  quantidadeEstoque,
  unidadeMedida,
  valorUnidade
) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query(updateProduct, [
    descricao,
    quantidadeEstoque,
    unidadeMedida,
    valorUnidade,
  ]);
  await connection.end();
}

async function deleteProduct(id) {
  const connection = await mysql.createConnection(databaseConfig);
  await connection.query("DELETE FROM product WHERE id = ?", [id]);
  await connection.end();
}
async function getProductById(id) {
  const connection = await mysql.createConnection(databaseConfig);
  const [product] = await connection.query(
    "SELECT * FROM product WHERE id = ?",
    [id]
  );

  await connection.end();

  return product;
}

module.exports = {
  getAllproduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
