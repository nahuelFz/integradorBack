const express = require('express')
const router = express.Router()
// Traemos el controlador
const productoController = require('../controllers/productoController')

router.get('/', productoController.getProductos)
router.get('/:codigo', productoController.getProductoByCodigo)
router.get('/filtrar', productoController.filtrarProductos)
router.post('/', productoController.createProducto)
router.put('/:codigo', productoController.updateProducto)
router.delete('/:codigo', productoController.deleteProducto)

module.exports = router