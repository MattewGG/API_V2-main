// Importa o módulo express para criar uma aplicação web.
const express = require("express");
// Importa o roteador de usuário para lidar com as rotas relacionadas aos usuários.
const userRouter = require("./router/userRouter.js");

const productRouter = require("./router/productRouter.js");

// Define a porta em que o servidor irá escutar.
const PORT = 3000;

// Cria uma instância do aplicativo Express.
const app = express();

// Define uma rota raiz que responde com uma mensagem "Hello World!".
app.get("/", (req, res) => {
  res.send(`<h1>Hello Word!</h1>`);
});

// Define o uso do roteador de usuário no caminho "/api".
app.use("/api", userRouter);
app.use("/api", productRouter);

// Inicia o servidor Express e escuta na porta definida.
app.listen(PORT, () => {
  console.log("Servidor online");
  console.log(`http://localhost:${PORT}`);
});
