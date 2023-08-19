const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });
const jwt = require('jsonwebtoken');

const sha256 = require('crypto-js/sha256');
const Base64 = require('crypto-js/enc-base64');

let secret = "ToPSecRET123"


userRouter.post("/sign-up", upload.single("avatar"), async (req, res) => {
    let avatar = `http://localhost:3000/${req.file.path}`;

    const {
        name,
        username,
        email,
        password
    } = req.body;
    const user = await User.create({
        name, 
        username, 
        email, 
        password,
        avatar
    });
    let token = jwt.sign({
        id: user._id,
        email: user.email
    }, secret);

    res.send({token: token});
});

userRouter.post("/sign-in", async (req, res) => {

    let {
        email,
        password
    } = req.body;

    password = Base64.stringify(sha256(password));

    const userLogado = await User.findOne({ email: email, password: password });

    if (userLogado) {
        const token = jwt.sign(
          {
            email: userLogado.email,
            id: userLogado._id,
          },
          secret
        );
    
        return res.send({ token: token });
      }
    
      res.status(401).json({ error: "Credenciais invalidas" });
});


module.exports = userRouter;