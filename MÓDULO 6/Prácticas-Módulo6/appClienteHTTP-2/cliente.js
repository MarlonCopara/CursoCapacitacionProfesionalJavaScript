const http = require('http');

const opciones = {
    hostname: 'localhost',
    port: 3000,
    path: '/index.html',
    method: 'GET'
};

const req = http.request(opciones, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
});

req.on('error', (error) => {
    console.error(error);
});

req.end();
