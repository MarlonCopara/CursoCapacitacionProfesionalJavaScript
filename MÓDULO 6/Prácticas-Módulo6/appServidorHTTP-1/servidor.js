const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Archivo no encontrado');
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
});

const puerto = 3000;
const dominio = 'localhost';

server.listen(puerto, dominio, () => {
    console.log(`Servidor corriendo en http://${dominio}:${puerto}/`);
});
