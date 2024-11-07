// Traemos el modelo de Producto
const Producto = require('../models/producto')

// Obtener todos los productos
const getProductos = (req, res) => {
    // Tomamos los atributos de la query
    const atributo = { ...req.query };

    // Realizamos la búsqueda
    Producto.find(query)
        .then(productos => res.json(productos))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }));
}


// Obtener un producto por código
const getProductoByCodigo = (req, res) => {
    const { codigo } = req.params
    Producto.findOne({ codigo: parseInt(codigo) })
        .then(producto => {
            if (!producto) return res.status(404).json({ message: 'Producto no encontrado' })
            res.json(producto)
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

// Filtrar productos (por nombre o categoría)
const filtrarProductos = (req, res) => {
    const { nombre, categoria } = req.query
    let filtro = {}

    if (nombre) filtro.nombre = { $regex: nombre, $options: 'i' }
    if (categoria) filtro.categorias = { $in: [categoria] }

    Producto.find(filtro)
        .then(productos => res.json(productos))
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

// Agregar un nuevo producto
const createProducto = (req, res) => {
    const newProducto = new Producto(req.body)
    newProducto.save()
        .then(producto => res.status(201).json(producto))
        .catch(error => res.status(400).json({ message: 'Error al agregar el producto', error }))
}

// Actualizar un producto
const updateProducto = (req, res) => {
    const { codigo } = req.params
    Producto.findOneAndUpdate({ codigo: parseInt(codigo) }, req.body, { new: true })
        .then(producto => {
            if (!producto) return res.status(404).json({ message: 'Producto no encontrado' })
            res.json(producto)
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

// Eliminar un producto
const deleteProducto = (req, res) => {
    const { codigo } = req.params
    Producto.findOneAndDelete({ codigo: parseInt(codigo) })
        .then(producto => {
            if (!producto) return res.status(404).json({ message: 'Producto no encontrado' })
            res.status(200).json({ message: 'Producto eliminado correctamente' })
        })
        .catch(error => res.status(500).json({ message: 'Error interno del servidor', error }))
}

module.exports = { 
    getProductos,
    getProductoByCodigo,
    filtrarProductos,
    createProducto,
    updateProducto,
    deleteProducto
}