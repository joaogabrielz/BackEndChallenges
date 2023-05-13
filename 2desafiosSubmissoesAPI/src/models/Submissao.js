const mongoose = require("mongoose");
const { Schema } = mongoose;

const submissaoSchema = new Schema({
    linkRepositorio: "String",
    dataCriacao: "Date",
    status: "String",
    nota: "Number",
    desafioId: { 
        type: Schema.Types.ObjectId, 
        ref: 'Desafio' 
    }
});

const Submissao = mongoose.model("Submissao", submissaoSchema);
module.exports = Submissao;