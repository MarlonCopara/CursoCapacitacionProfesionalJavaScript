const EventEmitter = require('events');

// Creamos una nueva instancia de EventEmitter
const radioEmitter = new EventEmitter();

// Objeto JSON
const station = {
    freq: '90.16',
    name: 'Mi Radio variada'
};

// Emitir el evento "open" al iniciar la aplicación
radioEmitter.emit('open', station);

// Manejar el evento "newListener"
radioEmitter.on('newListener', (event, listener) => {
    console.log(`Nuevo listener vinculado al evento '${event}'`);
});

module.exports = { radioEmitter, station };
