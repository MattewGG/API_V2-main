const productService = require("../service/product.js");

// Função assíncrona que lida com a requisição para obter todos os usuários.
async function getAllproduct(req, res) {
  try {
    // Chama a função getAllUser do módulo userService para obter todos os usuários.
    const rows = await productService.getAllproduct();

    // Responde à requisição com status 200 (OK) e envia os usuários como resposta em formato JSON.
    res.status(200).json(rows);
  } catch (error) {
    // Se ocorrer um erro, responde à requisição com status 500 (Internal Server Error) e envia uma mensagem de erro.
    res.status(500).send({
      message: "Error getting product",
      body: error.message,
    });
  }
}
async function createProduct(req, res) {
  const { descricao, quantidadeEstoque, unidadeMedida, valorUnidade } =
    req.body;

  try {
    await productService.createUser(
      descricao,
      quantidadeEstoque,
      unidadeMedida,
      valorUnidade
    );
    res.status(201).json({ message: "Sucess" });
  } catch (error) {
    res.status(500).send({
      message: "Error adding user!",
      error: error.message,
    });
  }
}

async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const { descricao, quantidadeEstoque, unidadeMedida, valorUnidade } =
      req.params;
    await productService.updateProduct(
      id,
      descricao,
      quantidadeEstoque,
      unidadeMedida,
      valorUnidade
    );
    res.status(204).json("Sucess");
  } catch (error) {
    res.status(500).send({
      message: "Error updating product!",
      body: error.message,
    });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.status(200).send({ message: "Deleted product" });
  } catch (error) {
    res.status(500).send({
      message: "erros deleting product",
      error: error.mensage,
    });
  }
}

async function getProductById(req, res) {
  try {
    const { id } = req.params;

    const product = await productService.getProductById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({
      message: "Error getting product by id",
      error: error.menssage,
    });
  }
}

// Exporta a função getAllUser como um objeto para ser utilizado em outros arquivos.
module.exports = {
  getAllproduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
//Tabela: product(id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade)

//Criar: migration, router, controller e service.
//A rota deverá ser /api/product
