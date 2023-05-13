const express = require("express");
const Submissao = require("../models/Submissao");
const mongoose = require("mongoose");
const Desafio = require("../models/Desafio");

const submissaoRouter = express.Router();

submissaoRouter.post("/", async (req, res) => {

  const { linkRep, status, nota } = req.body;
  const desafioId = req.desafioId;

  const submissao = await Submissao.create({
    linkRepositorio: linkRep,
    desafioId: desafioId,
    status: status,
    nota: nota,
    dataCriacao: new Date(),
  });

  res.status(201).json(submissao);
});

submissaoRouter.get("/", async (req, res) => {

  const page = req.query.page;
  const search = req.query.search;
  const desafioId = req.desafioId;

  const dateStart = req.query.start;
  const dateEnd = req.query.end;
  const limitPages = 2;

  if (dateStart && dateEnd) {
    startDate = new Date(req.query.start);
    endDate = new Date(req.query.end);
  }

  if (search || (dateStart && dateEnd)) {
    if (mongoose.Types.ObjectId.isValid(search)) {
      const desafio = await Desafio.findOne({
        _id: search,
      });
      res.json(desafio);
    } else {
      const submissoes = await Submissao.find({
        $or: [      
          dateStart && dateEnd
            ? { dataCriacao: { $gte: startDate, $lt: endDate } }
            : { status: { $regex: ".*" + search + ".*", $options: "i" } },
        ],
      });
      res.json(submissoes);
    }
  } else {
    if(!page){
      const submissoes = await Submissao.find({});
      res.json(submissoes);
    }
    else{
      const submissoes = await Submissao.find({})
        .skip((page - 1) * limitPages)
        .limit(limitPages);
      res.json(submissoes);
    }
  }
});

module.exports = submissaoRouter;
