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

// Exporta a função getAllUser como um objeto para ser utilizado em outros arquivos.
module.exports = {
  getAllproduct,
};
//Tabela: product(id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade)

//Criar: migration, router, controller e service.
//A rota deverá ser /api/product
