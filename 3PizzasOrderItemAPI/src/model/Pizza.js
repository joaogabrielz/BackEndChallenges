const mongoose = require('mongoose')
const pizzaSchema = new mongoose.Schema({
    name: "String",
    price: "Number",
    ingredients: ["String"]
});

 const pizza = mongoose.model('Pizzas', pizzaSchema)

 module.exports = pizza;