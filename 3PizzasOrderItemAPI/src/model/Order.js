const mongoose = require("mongoose");
const { ItemSchema } = require("./Item")

const orderSchema = new mongoose.Schema({
    itens: [ItemSchema],

})

const order = mongoose.model("Orders", orderSchema);
module.exports = order;