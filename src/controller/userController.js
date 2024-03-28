// Importa o módulo userService do arquivo "../service/user.js".
const { use } = require("../router/userRouter.js");
const userService = require("../service/user.js");

// Função assíncrona que lida com a requisição para obter todos os usuários.
async function getAllUser(req, res) {
  try {
    // Chama a função getAllUser do módulo userService para obter todos os usuários.
    const rows = await userService.getAllUser();

    // Responde à requisição com status 200 (OK) e envia os usuários como resposta em formato JSON.
    res.status(200).json(rows);
  } catch (error) {
    // Se ocorrer um erro, responde à requisição com status 500 (Internal Server Error) e envia uma mensagem de erro.
    res.status(500).send({
      message: "Error getting users",
      body: error.message,
    });
  }
}

async function createUser(req, res) {
  const { name, email, password } = req.body;

  try {
    await userService.createUser(name, email, password);
    res.status(201).json({ message: "Sucess" });
  } catch (error) {
    res.status(500).send({
      message: "Error adding user!",
      error: error.message,
    });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email, password } = req.params;
    await userService.updateUser(id, name, email, password);
    res.status(204).json("Sucess");
  } catch (error) {
    res.status(500).send({
      message: "Error updating user!",
      body: error.message,
    });
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(200).send({ message: "Deleted user" });
  } catch (error) {
    res.status(500).send({
      message: "erros deleting user",
      error: error.mensage,
    });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;

    const user = await userService.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      message: "Error getting user by id",
      error: error.menssage,
    });
  }
}

// Exporta a função getAllUser como um objeto para ser utilizado em outros arquivos.
module.exports = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

//Tabela: product(id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade)

//Criar: migration, router, controller e service.
//A rota deverá ser /api/product
