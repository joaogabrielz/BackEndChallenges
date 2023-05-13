const Desafio = require("../models/Desafio");

const verify = async (req, res, next) => {
    const desafio = await Desafio.findOne({ _id: req.params.id });
    if (!desafio) {
      return res.status(404).json({ message: "Desafio não encontrado." });
    }
    req.desafioId = desafio._id;
    next();
}

module.exports = verify;