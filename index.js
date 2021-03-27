const http = require('http');
// import http from 'http'

const server = http.createServer((request, response)=>{

    // console.log('Ruta: ', request.url);

    switch (request.url) {

        case '/':
            response.writeHead(200, {'Content-Type': 'application/json'});
            // response.statusCode(200);
            // response.statusMessage('ok');
            response.end(JSON.parse('Hola mundo'));
        default:


    }


});

server.listen(4000,()=>{
    console.log('Servidor operativo en puerto 4000 y dirección localhost');
});