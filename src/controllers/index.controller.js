const controller = {}

// controller.name = 'Ariane' //propiedad
// controller.saludar = ()=> console.log('Hola'); //metodo
//controller.saludar()
//console.log(controller.name);

controller.index = (req, res)=>{
    res.send('La conexion ha sido desde index.controller')
}

module.exports = controller
