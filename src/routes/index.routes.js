const express = require('express')
const router = express.Router()

//sintaxis para crear servidos express
//requieren de dos parametros req = request - peticion del cliente y res = response - rspuesta del servidor
router.get('/', (req, res)=>{
    res.send('La conexion ha sido desde index.routes')
})

module.exports = router