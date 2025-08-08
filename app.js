const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir archivos estáticos (como el HTML del juego)
app.use(express.static('public'));

// Escuchar conexiones de clientes
io.on('connection', (socket) => {
  console.log('🟢 Nuevo jugador conectado');

  // Recibir jugada de un jugador y reenviarla a todos
  socket.on('jugada', (data) => {
    console.log('📩 Jugada recibida:', data);
    io.emit('actualizarTablero', data); // se envía a todos
  });

  // Cuando se desconecta un jugador
  socket.on('disconnect', () => {
    console.log('🔴 Jugador desconectado');
  });
});

server.listen(3000, () => {
  console.log('Servidor WebSocket corriendo en http://localhost:3000');
});
 