const express = require('express')
const orderRouter = express.Router();
const Order = require('../model/Order');


orderRouter.post("", async (req, res) => {
  const { itens } = req.body;
  const order = await Order.create({itens: itens});
  res.send(order);
})

orderRouter.get("", async (req, res) => {
  const order = await Order.find({});
  res.send(order);
})

orderRouter.get("/:id", async (req, res) => {
  const order = await Order.findOne({_id: req.params.id});
  res.send(order);
})

module.exports = orderRouter;