// Importa o módulo express para criação de rotas HTTP.
const express = require("express");
// Cria um novo objeto Router do Express para definir rotas.
const router = express.Router();
// Importa o controlador userController para lidar com as requisições relacionadas aos usuários.
const userController = require("../controller/userController.js");

// Define uma rota GET para obter todos os usuários, utilizando o método getAllUser do userController.
router.get("/user", userController.getAllUser);

router.post("/user", userController.createUser);

// Exporta o objeto Router para que ele possa ser utilizado em outros arquivos.
module.exports = router;

//Tabela: product(id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade)

//Criar: migration, router, controller e service.
//A rota deverá ser /api/product
