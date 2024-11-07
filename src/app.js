// Conectamos a MongoDB usando Mongoose
const connectDB = require('./config/database')
connectDB()

// Traemos express
const express = require('express')
const app = express()

// Middleware para recibir JSON -> por las dudas
app.use(express.json())

const productoRoutes = require('./routes/productoRoutes.js');
app.use('/producto', productoRoutes)

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de productos📌')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})