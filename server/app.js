const express = require("express")();
const http = require("http").Server(express);
const socketio = require("socket.io")(http, { 
    cors: {    
      origin: "*",    
      methods: ["GET", "POST"]  
    }});


// const gamePosition = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
// const gamePosition = 'rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR b KQkq g3 0 1';
const gamePosition = '';


socketio.on('connection', socket => {
    socket.emit('position', gamePosition);
    socket.on('changePosition', data => {
        this.gamePosition = data;
        socket.emit('position', this.gamePosition);
    })
});


http.listen(3000, () => {
    console.log('Listening at 3000...');
});