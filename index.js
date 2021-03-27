const http = require('http');
// import http from 'http'

const server = http.createServer((request, response)=>{

    console.log('Ruta: ', request.url);

    // switch (request.url) {
    //
    //     case '/':
    //         response.wr
    //
    // }


});

server.listen(4000,()=>{
    console.log('Servidor operativo en puerto 4000 y dirección localhost');
});