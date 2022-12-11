const http = require('http')

//sintaxis para crear servidos 
 //requieren de dos parametros req = request - peticion del cliente
 //res = response - rspuesta del servidor
const server = http.createServer((req, res)=>{
    console.log('Un cliente se ha conectado');
    res.writeHead(200, {"content-Type": "text/html; charset = utf-8"})
    res.write('La conexion ha sido correcta')
    res.end();
})

server.listen(3000, ()=>{
    console.log('Servidor a la espera de conexiones');
})