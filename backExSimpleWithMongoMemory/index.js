const express = require("express");
const MongoMemoryServer = require("mongodb-memory-server")
const mongoose = require("mongoose")
const User = require("./User")


const setup = async () => {
    const mongodb = await MongoMemoryServer.MongoMemoryServer.create()
    mongoose.connect(`${mongodb.getUri()}test`)
    .then(() => {
        const app = express();
        app.use(express.json());
        
        app.get("/", (req, res) => {
            res.send("working...")
        });

        app.get("/usuarios", async (req, res) => {
            const usuarios = await User.find({});
            res.send(usuarios)
        });

        app.get("/usuarios/search", async (req, res) => {
            console.log(req.query)
            const usuarios = await User.find({name: req.query.name})
            res.send(usuarios)
        });

        app.post("/usuarios", async (req, res) => {
            console.log(req.body)
           const user = await User.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            endereco: req.body.endereco,
            idade: req.body.idade,
           })
           res.send(user)
        });

        app.listen(3000, () => {
            console.log(`App running at port http://localhost:3000`)
        })
    })
}
setup();



