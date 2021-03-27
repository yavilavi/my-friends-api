const http = require('http');
// import http from 'http'
const port = 3090
const server = http.createServer((request, response)=>{

    // console.log('Ruta: ', request.url);

    switch (request.url) {

        case '/':
            response.writeHead(200, {'Content-Type': 'application/json'});
            // response.statusCode(200);
            // response.statusMessage('ok');
            response.end(JSON.stringify('Hola mundo'));
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.end('No encontrado');
    }
});


server.listen(port,()=>{
    console.log(`Servidor operativo en puerto ${port} y dirección localhost`);
});
