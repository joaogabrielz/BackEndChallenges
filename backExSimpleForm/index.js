const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Adiciona o middleware cors ao express
app.use(express.json());

app.get("/", (req, res) => {
    res.send("working...")
});

app.post("/usuarios", (req, res) => {
    console.log(req.body)
    const user = {
        name: req.body.name,
        password: req.body.password,
        cpf: req.body.cpf,
    }
    res.send(JSON.stringify(user))
});

app.listen(3000, () => {
    console.log(`App running at port http://localhost:3000`)
});
