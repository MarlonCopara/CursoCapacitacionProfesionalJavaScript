const { radioEmitter, station } = require('./eventEmitterModule');

// Escuchar el evento "close"
radioEmitter.on('close', (station) => {
    console.log(`La radio '${station.name}' se ha apagado.`);
});

// Emitir el evento "close" después de 5 segundos
setTimeout(() => {
    radioEmitter.emit('close', station); // Pasar station en lugar de radioEmitter
}, 5000);
