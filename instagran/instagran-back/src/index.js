const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {MongoMemoryServer} = require("mongodb-memory-server");
const userRouter = require("./routes/users.routes");


const setup = async () => {
    const mongod = await MongoMemoryServer.create();
    await mongoose.connect(`${mongod.getUri()}instagran`);

    const app = express();

    app.use(cors());

    app.use(express.json());

    app.use(express.static("."));

    app.use("/users", userRouter);

    app.get("/", (req,res) => {
        res.send({message: "Tá no ar manolo!!!"})
    })

    app.listen(3000, () => {
        console.log("Aplicação rodando em: http://localhost:3000");
    })
}

setup();

