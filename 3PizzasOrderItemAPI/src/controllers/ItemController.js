// const express = require('express')
// const itemRouter = express.Router();
// const { Item } = require('../model/Item');


// itemRouter.post("", async (req, res) => {
//   const { qty, pizzaId } = req.body;
//   const item = await Item.create({qty, pizzaId});
//   res.send(item);
//   });

// itemRouter.get("", async (req, res) => {
//   const itens = await Item.find({});
//   res.send(itens);
//   });

// module.exports = itemRouter