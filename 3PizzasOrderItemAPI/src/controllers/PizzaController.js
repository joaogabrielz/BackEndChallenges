const express = require('express');
const pizzaRouter = express.Router();
const Pizza = require('../model/Pizza');



pizzaRouter.post("", async (req, res) =>  {
  const{ name, price, ingredients } = req.body;

const pizza = await Pizza.create({name,price,ingredients})
 res.send(pizza)

});

pizzaRouter.get("", async (req, res) => {

 const pizzas = await Pizza.find({});
 res.send(pizzas);

});

module.exports = pizzaRouter
