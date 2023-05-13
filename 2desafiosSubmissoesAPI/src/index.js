const express = require("express");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const DesafioController = require("./controllers/DesafioController");
const SubmissaoController = require("./controllers/SubmissaoController");
const VerifyDesafio = require("./middlewares/VerifyDesafio");

const PORT = 3000; // Definição da porta do servidor
const ENDPOINT_DESAFIOS = "/desafios"; // Nome do endpoint para a rota de desafios
const ENDPOINT_SUBMISSOES = "/desafios/:id/submissoes";


const setup = async () => {
  try {
    const mongod = await MongoMemoryServer.create();
    mongoose.connect(`${mongod.getUri()}desafios`);
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    const app = express();

    app.use(express.json());

    app.use(ENDPOINT_DESAFIOS, DesafioController);
    app.use(ENDPOINT_SUBMISSOES, VerifyDesafio, SubmissaoController);

    app.get("/", (req, res) => {
      res.send("Server is working..");
    });

    app.listen(PORT, () => {
      console.log(`Listening in http://localhost:${PORT}`);
    });
  } 
  catch (error) {
    console.error("Erro ao conectar ao banco: ", error)
  }
};

setup();
