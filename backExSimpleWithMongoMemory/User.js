const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  nome: String,
  cpf: String,
  endereco: String,
  idade: String
});

const user = mongoose.model("Usuario", UserSchema)
module.exports = user