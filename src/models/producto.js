const mongoose = require('mongoose')

const ProductoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    categorias: [String],
})

const Producto = mongoose.model('Producto', ProductoSchema)

module.exports = Producto