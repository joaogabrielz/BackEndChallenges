const express = require('express')

const { MongoMemoryServer } = require("mongodb-memory-server")
const mongoose = require('mongoose')


const pizzaController = require('./controllers/PizzaController');
const PIZZA_ENDPOINT = '/api/pizzas'

const itemController = require('./controllers/ItemController');
const ITEM_ENDPOINT = '/api/itens'

const orderController = require('./controllers/OrderController');
const ORDERS_ENDPOINT = '/api/orders'



MongoMemoryServer.create().then((mongod) => {
    mongoose.connect(`${mongod.getUri()}pizzery`).then(() => {

        const app = express();
        app.use(express.json())

        app.get('/', (req, res) => {
            res.send("server working...")
        });

       app.use(PIZZA_ENDPOINT, pizzaController);
       app.use(ITEM_ENDPOINT, itemController);
       app.use(ORDERS_ENDPOINT, orderController);

       //Conferir se pizza existe? por agora esta possivel criar pedidos, sem criar pizzas e itens tb

    
        app.listen(3000, () => {
            console.log("Servidor running at localhost:3000")
        })
    })

})